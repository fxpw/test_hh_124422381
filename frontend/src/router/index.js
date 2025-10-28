// Функция для получения всех маршрутов из подкаталогов
export async function loadRoutes() {
	// @ts-ignore
	const modules = import.meta.glob('../modules/*/routes/index.js');
	const routes = [];

	const promises = Object.keys(modules).map(async (modulePath) => {
		const module = await modules[modulePath]();

		const moduleName = modulePath.split('/')[2];

		try {
			const configModule = await import(`../modules/${moduleName}/config.js`);
			if (configModule.default && configModule.default.enabled) {
				if (module.default) {
					routes.push(...module.default);
				} else {
					console.warn(`Модуль не экспортирует маршруты: ${modulePath}`);
				}
			} else {
				console.warn(`Маршруты отключены для модуля: ${moduleName}`);
			}
		} catch (error) {
			console.error(`Ошибка при загрузке конфигурации для модуля ${moduleName}:`, error);
		}
	});

	await Promise.all(promises);
	return routes;
}

