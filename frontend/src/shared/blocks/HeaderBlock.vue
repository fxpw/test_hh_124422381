<template>
	<header class="header-block">
		<h1>{{ title }}</h1>
		<nav class="nav-buttons">
			<PrimaryButton class="nav-button" v-if="!isAuthenticated" @click="goToLogin">Вход</PrimaryButton>
			<PrimaryButton class="nav-button" v-if="!isAuthenticated" @click="goToRegister">Регистрация</PrimaryButton>
			<PrimaryButton class="nav-button" v-if="isAuthenticated" @click="logout">Выход</PrimaryButton>
		</nav>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'; // Импортируем useRouter
import PrimaryButton from '$shared/components/PrimaryButton.vue';

// Определяем свойства компонента
const props = defineProps({
	title: {
		type: String,
		default: 'Мое Приложение',
	},
});

// Подключаем router
const router = useRouter();

// Реактивные переменные для аутентификации
const isAuthenticated = computed(() => {
	// Проверяем, есть ли пользователь в localStorage
	return localStorage.getItem('userid') !== null;
});

// Метод выхода
const logout = () => {
	// Удаляем данные пользователя из localStorage
	localStorage.removeItem('userid');
	localStorage.removeItem('user_mail');
	localStorage.removeItem('jwt_token');

	// Перенаправляем на страницу входа с использованием Vue Router
	router.push('/login');
};

// Метод для перехода на страницу входа
const goToLogin = () => {
	router.push('/login'); // Используем router для перехода на страницу логина
};

// Метод для перехода на страницу регистрации
const goToRegister = () => {
	router.push('/register'); // Используем router для перехода на страницу регистрации
};
</script>

<style scoped>
.header-block {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #41b883;
	color: white;
	padding: 10px 20px;
	width: 100%;
}

.header-block h1 {
	margin: 0;
	flex: 1;
}

.nav-buttons {
	display: flex;
	gap: 10px;
}

.nav-button {
	min-width: 120px;
	padding: 10px;
	border-radius: 5px;
}
</style>
