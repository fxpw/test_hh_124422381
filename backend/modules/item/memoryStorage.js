// backend/modules/item/memoryStorage.js
const MAX_ITEMS = 1_000_000;

// основной массив элементов
const items = [];
let selectedItems = [];
let sortedSelectedItems = [];
const addQueue = new Set();

for (let i = 1; i <= MAX_ITEMS; i++) {
	items.push({ id: i, name: `Item ${i}` });
}

module.exports = {
	items,
	selectedItems,
	sortedSelectedItems,
	addQueue,
};
