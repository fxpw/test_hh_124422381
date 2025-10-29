// modules/item/services/ItemService.js
'use strict';

const itemRepository = require('modules/item/repositories/ItemRepository.js');

class ItemService {
	async getAll() {
		return await itemRepository.getAll();
	}

	async getById(id) {
		return await itemRepository.getById(id);
	}

	async create(data) {
		// Можно добавить валидацию/обработку
		return await itemRepository.create(data);
	}

	async update(id, data) {
		return await itemRepository.update(id, data);
	}

	async delete(id) {
		return await itemRepository.delete(id);
	}
}

module.exports = new ItemService();
