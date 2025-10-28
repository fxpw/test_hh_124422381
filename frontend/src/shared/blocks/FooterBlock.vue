<template>
	<footer class="footer-block">
		<div class="container">
			<p>© 2023 My Application. Все права защищены.</p>
			<nav>
				<ul class="footer-nav">
					<li><router-link to="/privacy-policy">Политика конфиденциальности</router-link></li>
					<li><router-link to="/terms-of-service">Условия использования</router-link></li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<script setup>
// Можно добавлять логики и переменные, если это необходимо
</script>

<style scoped>
.footer-block {
	background-color: #2d2d2d;
	/* Цвет фона подвала */
	color: white;
	/* Цвет текста */
	padding: 10px 20px;
	/* Внутренние отступы */
	text-align: center;
	/* Центрируем текст */
}

.footer-nav {
	list-style-type: none;
	/* Убираем маркеры списка */
	padding: 0;
	/* Убираем отступы */
	margin: 0;
	/* Убираем отступы */
	display: flex;
	/* Используем flexbox для навигации */
	justify-content: center;
	/* Центрируем по горизонтали */
	gap: 20px;
	/* Пробел между элементами */
}

.footer-nav li {
	display: inline;
	/* Устанавливаем элементы в один ряд */
}

.footer-nav a {
	color: #ffffff;
	/* Цвет ссылок */
	text-decoration: none;
	/* Убираем подчеркивание у ссылок */
}

.footer-nav a:hover {
	text-decoration: underline;
	/* Подчеркивание при наведении */
}
</style>
