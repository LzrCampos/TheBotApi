const express = require('express');
const route = express.Router();
const controller = require('../controllers/bot.controller');

// Definido rotas
route.post('/', controller.create);
route.get('/', controller.list);
route.get('/:id', controller.getBot);
route.put('/:id', controller.rename);
route.delete('/:id', controller.deleteBot);

// Exportando modulo
module.exports = route