<template>
	<router-link :to="to" class="back-link mb-4 text-blue-500">
		{{ text }}
	</router-link>
</template>

<script setup>

// Определяем свойства компонента
const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		default: 'Назад', // Задаем текст по умолчанию
	},
});
</script>

<style scoped>
.back-link {
	/* Добавьте стили для ссылки, если требуется */
}
</style>
