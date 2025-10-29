// backend/db/seeders/20251029094044-insert-items.js
'use strict';

const BATCH_SIZE = 20000; // выбираем размер батча, чтобы не нагружать память

module.exports = {
	async up(queryInterface, Sequelize) {
		const total = 1_000_000;
		for (let batchStart = 1; batchStart <= total; batchStart += BATCH_SIZE) {
			const batchEnd = Math.min(batchStart + BATCH_SIZE - 1, total);
			const bulkInsertData = [];

			for (let id = batchStart; id <= batchEnd; id++) {
				bulkInsertData.push({ id });
			}

			await queryInterface.bulkInsert('Items', bulkInsertData);
			console.log(`Inserted IDs from ${batchStart} to ${batchEnd}`);
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Items', null, {});
	},
};
