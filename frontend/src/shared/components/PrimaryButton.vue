<template>
	<button class="primary-button" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script setup>

// Определяем свойства компонента
const props = defineProps({
	type: {
		type: String,
		default: 'button', // Тип кнопки по умолчанию
	},
});

// Метод для обработки клика (optional)
const handleClick = (event) => {
	console.log("Button Clicked!");
	// Вы можете использовать событие, если это необходимо
	// Для передачи события выше
	// emit('click', event);
}
</script>

<style scoped>
.primary-button {
	background-color: #41b883;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
}

.primary-button:hover {
	background-color: #37a56f;
}
</style>
