const routes = [
	{
		path: '/items',
		name: 'Items',
		component: () => import('../pages/ItemsPage.vue'),
	},
];

export default routes;
