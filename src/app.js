const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://admin:admin01@ds219672.mlab.com:19672/thebot', { useNewUrlParser: true });
// mongoose.connect('mongodb://10.0.75.1:27017/thebot', { useNewUrlParser: true });

const port = 8000;
const host = '0.0.0.0';

const bot = require('./models/bot.model');

const botRoutes = require('./routes/bot.route');

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use('/bot', botRoutes);

app.listen(port, host, () => {
    console.log(`App rodando na porta ${port}`);
})