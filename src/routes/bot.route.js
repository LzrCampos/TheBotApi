const express = require('express');
const route = express.Router();
const controller = require('../controllers/bot.controller');

route.post('/', controller.post);
route.get('/', controller.get);
route.get('/:id', controller.getById);
route.put('/', controller.updated);
route.delete('/:id', controller.delete);

module.exports = route