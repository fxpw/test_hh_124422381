<template>
	<HeaderBlock title="Регистрация" />
	<div class="flex flex-col items-center justify-center h-screen">
		<div class="w-full max-w-md p-4 bg-white rounded shadow-md">
			<h2 class="text-2xl font-semibold text-center mb-4">Регистрация</h2>
			<div class="registration-form">
				<Textarea v-model="registrationData.email" placeholder="Email для регистрации" />
				<Textarea v-model="registrationData.password" placeholder="Пароль" type="password" />
				<PrimaryButton @click="register">Зарегистрироваться</PrimaryButton>
				<div v-if="registrationError" class="error-message text-red-500 mt-2">{{ registrationError }}</div>
			</div>
			<p class="text-neutral-700 text-center mt-4">Уже есть аккаунт?</p>
			<PrimaryButton @click="goToLogin">Войти</PrimaryButton>
		</div>
	</div>
	<FooterBlock />
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from '$shared/components/PrimaryButton.vue';
import Textarea from '$shared/components/Textarea.vue';
import HeaderBlock from '$shared/blocks/HeaderBlock.vue';
import FooterBlock from '$shared/blocks/FooterBlock.vue';
import client from '../../../js/api/client.js';
import { useRouter } from 'vue-router';
const router = useRouter();
const registrationData = ref({
	email: '',
	password: ''
});
const registrationError = ref('');

const register = async () => {
	registrationError.value = '';
	try {
		// let response = await client.post('register', registrationData.value);

		console.log('User registered:', registrationData.value);
		router.push('/login');
	} catch (error) {
		registrationError.value = 'Ошибка регистрации: ' + error.message;
	}
};

const goToLogin = () => {
	router.push('/login');
};
</script>

<style scoped>
.error-message {
	color: red;
}
</style>
