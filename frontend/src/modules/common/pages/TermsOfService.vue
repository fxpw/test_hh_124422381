<template>
	<div class="terms-of-service">
		<HeaderBlock title="Условия использования" />
		<div class="content">
			<h1>Условия использования</h1>
			<p>
				Здесь вы можете описать условия использования вашего приложения.
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
