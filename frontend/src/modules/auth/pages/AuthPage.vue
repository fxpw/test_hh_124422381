<template>
	<HeaderBlock title="Авторизация" />
	<!-- должно быть вынесено внутри блока -->
	<div class="flex flex-col items-center justify-center h-screen">
		<div class="w-full max-w-md p-4 bg-white rounded shadow-md">
			<h2 class="text-2xl font-semibold text-center mb-4">Авторизация</h2>
			<div class="login-form mb-4">
				<Textarea v-model="loginData.email" placeholder="Email для входа" />
				<Textarea v-model="loginData.password" placeholder="Пароль" type="password" />
				<PrimaryButton @click="login">Войти</PrimaryButton>
				<div v-if="loginError" class="error-message text-red-500 mt-2">{{ loginError }}</div>
			</div>
			<div class="text-center mt-4">
				<p class="text-neutral-700">Не зарегистрированы?</p>
				<PrimaryButton @click="goToRegister">Создать аккаунт</PrimaryButton>
			</div>
		</div>
	</div>
	<!-- должно быть вынесено внутри блока -->
	<FooterBlock />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PrimaryButton from '$shared/components/PrimaryButton.vue';
import Textarea from '$shared/components/TextareaExample.vue';
import HeaderBlock from '$shared/blocks/HeaderBlock.vue';
import FooterBlock from '$shared/blocks/FooterBlock.vue';
import client from '$js/api/client.js';
import { isUserAuthenticated } from '$js/utils/auth';

// Реактивные переменные
const loginData = ref({
	email: '',
	password: ''
});
const loginError = ref('');
const router = useRouter();
// Методы
const login = async () => {
	loginError.value = '';
	try {
		// Здесь должна быть логика для вызова API на вход
		// Например: let response = await client.post('login', loginData.value);

		// Для тестирования, временно установим значения
		console.log('Email:', loginData.value.email);
		console.log('Password:', loginData.value.password);
		const userid = 1;
		const user_mail = "test@test.test";
		const jwt_token = "example-jwt-token";

		localStorage.setItem('userid', userid);
		localStorage.setItem('user_mail', user_mail);
		localStorage.setItem('jwt_token', jwt_token);

		// После успешного входа, перенаправляем на рабочее пространство
		router.push('/workspace');
	} catch (error) {
		loginError.value = 'Ошибка входа: ' + error.message;
	}
};

const goToRegister = () => {
	router.push('/register');
};

// Проверка аутентификации при загрузке страницы
if (isUserAuthenticated()) {
	router.push('/workspace');
}
</script>

<style scoped>
.error-message {
	color: red;
}
</style>
