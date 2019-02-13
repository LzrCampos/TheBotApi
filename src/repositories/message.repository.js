const mongoose = require('mongoose');
const Message = mongoose.model('message');

// Registra uma menssagem na base
exports.createMessage = async (data) => {
    let message = new Message(data);
    await message.save();
}

// Recupera uma menssagem na base pelo id da menssagem
exports.getMessageId = async (id) => {
    // Query para trazer somente oque for utlizado
    let message = await Message
    .findOne(
        {id: id}, 
        {"_id":0, "id":1, "conversationId":1, "timestamp":1, "from":1, "to":1}
    );
    return message;
}

// Recupera menssagens de uma conversa pelo id da conversa
exports.GetConversationById = async (id) => {
    // Query para trazer somente oque for utlizado e ordena a conversa por data
    let message = await Message
    .find(
        {conversationId: id}, 
        {"_id":0, "id":1, "conversationId":1, "timestamp":1, "from":1, "to":1}
    )
    .sort({timestamp: 1});
    return message;
}