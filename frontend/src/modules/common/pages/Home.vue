<template>
	<div class="home">
		<HeaderBlock title="Home" />
		<div class="content">
			<h1>Test</h1>
		</div>
		<FooterBlock />
	</div>
</template>

<script setup>
import HeaderBlock from '$shared/blocks/HeaderBlock.vue';
import FooterBlock from '$shared/blocks/FooterBlock.vue';
</script>

<style scoped>
.content {
	padding: 20px;
}
</style>
