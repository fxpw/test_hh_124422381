<template>
	<div class="textarea-wrapper">
		<input :type="isPasswordType && !isPasswordVisible ? 'password' : 'text'" class="textarea"
			v-model="inputValue" :placeholder="placeholder" @input="updateValue" />
		<button v-if="isPasswordType" @click="togglePasswordVisibility" class="toggle-password">
			{{ isPasswordVisible ? 'Скрыть' : 'Показать' }}
		</button>
	</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

// Определяем свойства компонента
const props = defineProps({
	value: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'text', // По умолчанию - текст
	},
	placeholder: {
		type: String,
		default: '',
	},
});

// Эмитируем события
const emit = defineEmits(['update:value']);

// Локальные состояния
const isPasswordVisible = ref(false);

// Устанавливаем значение по умолчанию в inputValue из props.value
const inputValue = ref(props.value);

// Синхронизация значения с родителем
watch(
	() => props.value,
	(newValue) => {
		inputValue.value = newValue;
	}
);

// Метод для обновления значения
const updateValue = (event) => {
	inputValue.value = event.target.value;
	// Эмитируем изменение для родителя
	emit('update:value', inputValue.value);
};

// Определяем тип поля
const isPasswordType = computed(() => props.type === 'password');

// Метод для переключения видимости пароля
const togglePasswordVisibility = () => {
	isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style scoped>
.textarea-wrapper {
	position: relative;
}

.textarea {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: none;
}

.toggle-password {
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	color: #007bff;
	cursor: pointer;
}
</style>
