'use strict';

const BATCH_SIZE = 20000;
const crypto = require('crypto');

function getRandomString(length) {
	return crypto.randomBytes(length)
		.toString('base64')
		.replace(/[^a-zA-Z0-9]/g, '')
		.slice(0, length);
}

module.exports = {
	async up(queryInterface, Sequelize) {
		const total = 1_000_000;
		for (let batchStart = 1; batchStart <= total; batchStart += BATCH_SIZE) {
			const batchEnd = Math.min(batchStart + BATCH_SIZE - 1, total);
			const bulkInsertData = [];

			for (let id = batchStart; id <= batchEnd; id++) {
				bulkInsertData.push({
					id,
					name: getRandomString(10),
				});
			}

			await queryInterface.bulkInsert('items', bulkInsertData);
			console.log(`Inserted IDs from ${batchStart} to ${batchEnd}`);
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('items', null, {});
	},
};
