<template>
	<div class="flex flex-col h-screen bg-gray-100">
		<HeaderBlock title="Список элементов (1000000)" />
		<div class="flex flex-1 overflow-hidden p-4 gap-4">
			<!-- Левое окно -->
			<div class="flex-1 bg-white rounded shadow p-3 flex flex-col">
				<h2 class="font-bold mb-2">Все элементы</h2>
				<div class="flex mb-2">
					<input v-model="filterLeft" placeholder="Фильтр по ID" class="border rounded px-2 py-1 w-full" />
					<button @click="reloadLeft" class="ml-2 bg-green-500 text-white px-3 py-1 rounded">Найти</button>
				</div>
				<div ref="leftList" class="flex-1 overflow-auto border rounded p-2">
					<div v-for="item in itemsLeft" :key="item.id"
						class="cursor-pointer hover:bg-gray-200 p-1 rounded"
						@click="selectItem(item)">
						{{ item.id }} — {{ item.name }}
					</div>
					<div v-if="loadingLeft" class="text-center py-2">Загрузка...</div>
				</div>
				<div class="mt-3 flex">
					<input v-model="newIds" placeholder="Добавить ID через запятую" class="border rounded px-2 py-1 w-full" />
					<button @click="addBatch" class="ml-2 bg-blue-500 text-white px-3 py-1 rounded">Добавить</button>
				</div>
			</div>

			<!-- Правое окно -->
			<div class="flex-1 bg-white rounded shadow p-3 flex flex-col">
				<h2 class="font-bold mb-2">Выбранные элементы</h2>
				<div class="flex mb-2">
					<input v-model="filterRight" placeholder="Фильтр по ID" class="border rounded px-2 py-1 w-full" />
				</div>
				<div ref="rightList" class="flex-1 overflow-auto border rounded p-2">
					<draggable v-model="selected" item-key="id" @end="saveOrder">
						<template #item="{ element }">
							<div v-if="!filterRight || element.id.toString().includes(filterRight)"
								class="p-1 bg-gray-100 mb-1 rounded flex justify-between items-center">
								<span>{{ element.id }}</span>
								<button class="text-red-500" @click.stop="removeItem(element)">✕</button>
							</div>
						</template>
					</draggable>
					<div v-if="loadingRight" class="text-center py-2">Загрузка...</div>
				</div>
			</div>
		</div>
		<FooterBlock />
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import HeaderBlock from '$shared/blocks/HeaderBlock.vue';
import FooterBlock from '$shared/blocks/FooterBlock.vue';
import client from '$js/api/client.js';
import draggable from 'vuedraggable';

const itemsLeft = ref([]);
const selected = ref([]);
const filterLeft = ref('');
const filterRight = ref('');
const newIds = ref('');
const pageLeft = ref(1);
const loadingLeft = ref(false);
const loadingRight = ref(false);
const leftList = ref(null);

const loadLeft = async () => {
	if (loadingLeft.value) return;
	loadingLeft.value = true;
	try {
		const res = await client.get(`/items`, { params: { page: pageLeft.value, id: filterLeft.value } });
		if (pageLeft.value === 1) itemsLeft.value = res.data;
		else itemsLeft.value.push(...res.data);
		if (res.data.length > 0) pageLeft.value++;
	} catch (e) {
		console.error(e);
	}
	loadingLeft.value = false;
};

const reloadLeft = async () => {
	pageLeft.value = 1;
	itemsLeft.value = [];
	await loadLeft();
};

const loadSelected = async () => {
	loadingRight.value = true;
	try {
		const res = await client.get(`/items/selected`);
		selected.value = res.data;
	} catch (e) {
		console.error(e);
	}
	loadingRight.value = false;
};

const selectItem = async (item) => {
	if (!selected.value.find(i => i.id === item.id)) {
		selected.value.push(item);
		await client.post(`/items/selected`, { ids: selected.value.map(i => i.id) });
	}
};

const removeItem = async (item) => {
	selected.value = selected.value.filter(i => i.id !== item.id);
	await client.post(`/items/selected`, { ids: selected.value.map(i => i.id) });
};

const addBatch = async () => {
	if (!newIds.value) return;
	const ids = newIds.value.split(',').map(i => parseInt(i.trim())).filter(Boolean);
	await client.post(`/items/batch`, { ids });
	newIds.value = '';
	alert('ID добавлены в очередь батчинга (10 сек).');
};

const saveOrder = async () => {
	try {
		const ids = selected.value.map(i => i.id);
		await client.post(`/items/selected/sort`, { order: ids });
		console.log('✅ порядок сохранён:', ids.slice(0, 10), '...');
	} catch (e) {
		console.error('Ошибка при сохранении порядка', e);
	}
};

const onScrollLeft = () => {
	const el = leftList.value;
	if (!el) return;
	if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
		loadLeft();
	}
};

onMounted(async () => {
	await loadLeft();
	await loadSelected();
	leftList.value.addEventListener('scroll', onScrollLeft);
});
</script>

<style scoped>
.flex-1 {
	min-width: 0;
}
</style>
