// db/models/item.js
'use strict';
const {
	Model,
	Sequelize,
	DataTypes,
} = require('sequelize');

const sequelize = require('db/connect.js');

class Item extends Model {
	static associate(models) {
		// сюда добавляйте ассоциации при необходимости
	}
}

const props = {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: false, // ручное указание ID
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING(255),
		allowNull: true,
		field: 'name',
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		field: 'created_at',
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		field: 'updated_at',
	},
};

Item.init(props, {
	sequelize,
	tableName: 'items',
	timestamps: false,
});

/**
 * @typedef {import('sequelize').Model & typeof props} Item
 */

module.exports = Item;
