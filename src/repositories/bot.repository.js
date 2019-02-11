const mongoose = require('mongoose');
const Bot = mongoose.model('bot');

exports.create = async (data) => {
    let bot = new Bot(data)
    await bot.save()
}

exports.get = async () => {
    let res = await Bot.find();
    return res
}

exports.getById = async (id) => {
    let res = await Bot.findById(id);
    return res
}

exports.updated = async (data) => {
    Bot.findByIdAndUpdate(data.id, {
        $set: {
            name: data.name
        }
    });
}

exports.delete = async (id) => {
    Bot.findByIdAndDelete({ _id: id}, function (res) {});
}