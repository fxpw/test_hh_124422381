// backend/modules/item/routes/Route.js
'use strict';

const { Router } = require('express');
const controller = require('modules/item/controllers/ItemController.js');

const router = Router();

router.get('/', controller.getItems); // Получение с фильтром и пагинацией
router.post('/batch', controller.addItemsBatch); // батч добавление
router.get('/selected', controller.getSelected); // Получить выбранные
router.post('/selected', controller.updateSelected); // Обновить выбранных
router.post('/selected/sort', controller.updateOrder); // Обновить сортировку

module.exports = router;
