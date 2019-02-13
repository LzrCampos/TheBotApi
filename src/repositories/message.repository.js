const mongoose = require('mongoose');
const Message = mongoose.model('message');

// Registra uma menssagem na base
exports.createMessage = async (data) => {
    let message = new Message(data);
    await message.save();
}

// recupera uma menssagem na base pelo id da menssagem
exports.getMessageId = async (id) => {
    let message = await Message
    .findOne(
        {id: id}, 
        {"_id":0, "id":1, "conversationId":1, "timestamp":1, "from":1, "to":1}
    );
    return message;
}

exports.GetConversationById = async (id) => {
    let message = await Message
    .find(
        {conversationId: id}, 
        {"_id":0, "id":1, "conversationId":1, "timestamp":1, "from":1, "to":1}
    )
    .sort({timestamp: 1});
    return message;
}