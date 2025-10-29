// backend/modules/item/controllers/ItemController.js
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
		res.json({ message: 'Идёт добавление', count: ids.length });
	},

	getSelected: (req, res) => {
		const base = sortedSelectedItems.length > 0 ? sortedSelectedItems : selectedItems;
		return res.json(base.map(id => ({ id })));
	},

	updateSelected: (req, res) => {
		const { ids } = req.body;
		if (!Array.isArray(ids)) {
			return res.status(400).json({ message: 'Invalid input' });
		}
		selectedItems.length = 0;
		selectedItems.push(...ids);
		sortedSelectedItems.length = 0;
		sortedSelectedItems.push(...ids);
		res.json({ message: 'Выбранные элементы обновлены', count: ids.length });
	},

	updateOrder: (req, res) => {
		const { order } = req.body;
		if (Array.isArray(order)) {
			sortedSelectedItems.length = 0;
			sortedSelectedItems.push(...order);
			// console.log('Новый порядок:', order.slice(0, 10), '...');
			res.json({ message: 'Порядок сохранен', count: sortedSelectedItems.length });
		} else {
			res.status(400).json({ message: 'Invalid order' });
		}
	},
};
