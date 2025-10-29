// modules/item/controllers/ItemController.js
'use strict';

const itemService = require('modules/item/services/ItemService.js');

class ItemController {
	async getItems(req, res) {
		try {
			const items = await itemService.getAll();
			res.json(items);
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при получении элементов' });
		}
	}

	async getItemById(req, res) {
		const id = req.params.id;
		try {
			const item = await itemService.getById(id);
			if (item) {
				res.json(item);
			} else {
				res.status(404).json({ message: 'Элемент не найден' });
			}
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при получении элемента' });
		}
	}

	async createItem(req, res) {
		const data = req.body;
		try {
			const newItem = await itemService.create(data);
			res.status(201).json(newItem);
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при создании элемента' });
		}
	}

	async updateItem(req, res) {
		const id = req.params.id;
		const data = req.body;
		try {
			const updated = await itemService.update(id, data);
			if (updated) {
				res.json(updated);
			} else {
				res.status(404).json({ message: 'Элемент не найден' });
			}
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при обновлении элемента' });
		}
	}

	async deleteItem(req, res) {
		const id = req.params.id;
		try {
			const deleted = await itemService.delete(id);
			if (deleted) {
				res.json({ message: 'Удалено' });
			} else {
				res.status(404).json({ message: 'Элемент не найден' });
			}
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при удалении' });
		}
	}
}

module.exports = new ItemController();
