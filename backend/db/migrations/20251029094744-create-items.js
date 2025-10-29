// backend/db/migrations/20251029094744-create-items.js
'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('items', {
			id: {
				type: Sequelize.INTEGER.UNSIGNED,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING(255),
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn('NOW'),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn('NOW'),
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('items');
	},
};
