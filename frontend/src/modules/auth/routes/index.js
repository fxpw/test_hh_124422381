

const routes = [
	{
		path: '/',
		// redirect: '/login',
		name: 'Home',
		component: () => import('../pages/AuthPage.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../pages/AuthPage.vue'), // Ленивая загрузка компонента
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../pages/RegisterPage.vue'), // Ленивая загрузка компонента
	},
];

export default routes;
