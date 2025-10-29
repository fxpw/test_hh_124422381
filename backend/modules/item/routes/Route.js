// backend/modules/item/routes/Route.js
'use strict';

const { Router } = require('express');
const controller = require('modules/item/controllers/ItemController.js');

const router = Router();

router.get('/', controller.getItems);
router.post('/', controller.createItem);
router.get('/:id', controller.getItemById);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
