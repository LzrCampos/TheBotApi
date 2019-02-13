const mongoose = require('mongoose');
const Bot = mongoose.model('bot');

// Insere um novo bot na base
exports.createBot = async (data) => {
    let bot = new Bot(data)
    await bot.save()
}

// Lista todos os bot na base
exports.findAll = async () => {
    let res = await Bot
    .find(
        {}, 
        {"_id": 0, "id":1, "name":1}
    );
    return res
}

// Busca um bot na base pelo id
exports.findBotById = async (id) => {
    let res = await Bot
    .findOne(
        {id: id}, 
        {"id":1, "name":1}
    );
    return res
}

// Atualiza um bot na base pelo id
exports.updatedBot = async (id, name) => {
    Bot.findOneAndUpdate(
        {id: id}, {
            $set: {
                name: name
            }
        }, function (err, place){});
}

// Deleta um bot da base pelo id
exports.deleteBot = async (id) => {
    Bot.findOneAndDelete(
        { id: id}
        , function (err, place) {});
}