// controllers/itemController.js
const { items, selectedItems, sortedSelectedItems, addQueue } = require('modules/item/memoryStorage');

const ITEMS_PER_PAGE = 20;

module.exports = {
	getItems: (req, res) => {
		const filterID = req.query.id ? parseInt(req.query.id) : null;
		const page = parseInt(req.query.page) || 1;

		let result = [...items];

		if (filterID && !isNaN(filterID)) {
			result = result.filter(item => item.id.toString().includes(filterID.toString()));
		}

		result.sort((a, b) => a.id - b.id);

		const startIdx = (page - 1) * ITEMS_PER_PAGE;
		const paginated = result.slice(startIdx, startIdx + ITEMS_PER_PAGE);

		res.json(paginated);
	},

	addItemsBatch: (req, res) => {
		const { ids } = req.body;
		if (!Array.isArray(ids)) {
			return res.status(400).json({ message: 'Invalid input, expected array of ids' });
		}

		for (const id of ids) {
			addQueue.add(id);
		}
		res.json({ message: 'Идет добавление', count: ids.length });
	},

	getSelected: (req, res) => {
		res.json(selectedItems);
	},

	updateSelected: (req, res) => {
		const { ids } = req.body;
		if (!Array.isArray(ids)) {
			return res.status(400).json({ message: 'Invalid input' });
		}
		selectedItems.length = 0; // очистка
		selectedItems.push(...ids);
		res.json({ message: 'Статус выбранных обновлен' });
	},

	updateOrder: (req, res) => {
		const { order } = req.body;
		if (Array.isArray(order)) {
			sortedSelectedItems = order;
			res.json({ message: 'Порядок сохранен' });
		} else {
			res.status(400).json({ message: 'Invalid order' });
		}
	}
};
