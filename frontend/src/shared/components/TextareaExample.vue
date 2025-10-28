<script setup>
// ! import all
import { ref, watch, computed } from 'vue';

// ! define props
const props = defineProps({
	modelValue: {
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

// ! define params
const emit = defineEmits(['update:modelValue']);
// const inputValue = ref(props.modelValue);
const params = {
	isPasswordVisible: ref(false),
	inputValue: ref(props.modelValue),
	isPasswordType: computed(() => props.type === 'password')
}

// ! define methods
const methods = {
	updateValue: (event) => {
		// params.inputValue.value = event.target.value;
		emit('update:modelValue', event.target.value);
	},
	togglePasswordVisibility: () => {
		params.isPasswordVisible.value = !params.isPasswordVisible.value;
	},
}

// ! hooks
watch(
	() => props.modelValue,
	(newValue) => {
		params.inputValue.value = newValue;
	}
);

</script>

<template>
	<div class="textarea-wrapper">
		<input :type="params.isPasswordType.value && !params.isPasswordVisible.value ? 'password' : 'text'"
			class="textarea" v-model="params.inputValue.value" :placeholder="placeholder"
			@input="methods.updateValue" />
		<button v-if="params.isPasswordType.value" @click="methods.togglePasswordVisibility" class="toggle-password">
			{{ params.isPasswordVisible.value ? 'Скрыть' : 'Показать' }}
		</button>
	</div>
</template>

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
