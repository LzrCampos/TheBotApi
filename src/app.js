'use strict'
// Importa os pacotes serão usados
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Intacia o server
const app = express();

// Porta e host que serão usados
const host = '0.0.0.0';
const port = 8000;

// Abre conexão com o mongodb
mongoose.connect('mongodb://admin:admin01@ds219672.mlab.com:19672/thebot', { useNewUrlParser: true });
// mongoose.connect('mongodb://10.0.75.1:27017/thebot', { useNewUrlParser: true });

// Inicia as models
const bot = require('./models/bot.model');
const message = require('./models/message.model');

// Inicia as rotas
const botRoutes = require('./routes/bot.route');
const messagesRoutes = require('./routes/message.route');

// Define o limite de dados na requisição
app.use(bodyParser.json({
    limit: '5mb'
}));

// Define os endpoint's
app.use('/bot', botRoutes);
app.use('/messages', messagesRoutes);

// Inicia o servidor
app.listen(port, host, () => {
    console.log(`App rodando na porta ${port}`);
})