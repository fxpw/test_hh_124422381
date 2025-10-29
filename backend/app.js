// app.js
const express = require('express');
const cors = require('cors');

const itemRoutes = require('./modules/item/routes/Route.js');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGINS?.split(',') || ['https://app.fxpw.site'] }));
app.use(express.json());
const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
};
app.use(logger);
// подключение маршрутов
app.use('/api/items', itemRoutes);

const PORT = process.env.BACKEND_PORT || 5003;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Таймер батчинга — добавление новых элементов батчами
const { addQueue, items } = require('./modules/item/memoryStorage.js');

setInterval(() => {
	if (addQueue.size > 0) {
		for (const id of addQueue) {
			if (!items.find(e => e.id === id)) {
				items.push({ id: id, name: `Item ${id}` });
			}
		}
		console.log(`Добавлено элементов из очереди батчингом: ${addQueue.size}`);
		addQueue.clear();
	}
}, 10000);
