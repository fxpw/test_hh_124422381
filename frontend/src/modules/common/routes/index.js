const routes = [
	{
		path: '/terms-of-service',
		name: 'TermsOfService',
		component: () => import('../pages/TermsOfService.vue'), // Ленивая загрузка компонента
	},
	{
		path: '/privacy-policy',
		name: 'PrivacyPolicy',
		component: () => import('../pages/PrivacyPolicy.vue'), // Ленивая загрузка компонента
	},
];

export default routes;
