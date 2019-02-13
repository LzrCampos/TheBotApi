const express = require('express');
const route = express.Router();
const controller = require('../controllers/message.controller');

// Definindo rotas
route.post('/', controller.sendMessage);
route.get('/:id', controller.getMessageById);
route.get('/', controller.GetConversationById);

// Exporta modulo
module.exports = route