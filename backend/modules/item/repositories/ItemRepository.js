// modules/item/repositories/ItemRepository.js
'use strict';

const ItemModel = require('db/models/item.js');

class ItemRepository {
	async getAll() {
		return await ItemModel.findAll();
	}

	async getById(id) {
		return await ItemModel.findByPk(id);
	}

	async create(data) {
		return await ItemModel.create(data);
	}

	async update(id, data) {
		const item = await this.getById(id);
		if (!item) return null;
		await item.update(data);
		return item;
	}

	async delete(id) {
		const item = await this.getById(id);
		if (!item) return null;
		await item.destroy();
		return true;
	}
}

module.exports = new ItemRepository();
