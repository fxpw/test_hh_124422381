<template>
	<div class="privacy-policy">
		<HeaderBlock title="Политика конфиденциальности" />
		<div class="content">
			<h1>Политика конфиденциальности</h1>
			<p>
				Здесь вы можете описать политику конфиденциальности вашего приложения.
				...
			</p>
			<BackLink to="/" text="На главную" />
		</div>
		<FooterBlock />
	</div>
</template>

<script setup>
import HeaderBlock from '$shared/blocks/HeaderBlock.vue';
import FooterBlock from '$shared/blocks/FooterBlock.vue';
import BackLink from '$shared/components/BackLink.vue';
</script>

<style scoped>
.content {
	padding: 20px;
}
</style>
