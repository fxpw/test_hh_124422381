// memoryStorage.js
const MAX_ITEMS = 1000000;

// Массив всех элементов
const items = [];
// Массив выбранных id
let selectedItems = [];
// Порядок выбранных элементов (для сортировки)
let sortedSelectedItems = [];
// Очередь батчинга добавлений
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
