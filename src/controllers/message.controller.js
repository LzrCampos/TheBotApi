const repository = require('../repositories/message.repository');
const guid = require('guid');

exports.sendMessage = async (req, res, next) => {
    let conversetion = ''
    try {
        if( req.body.conversationId.trim() == '' || 
            req.body.conversationId == 'null') {
                conversetion = guid.raw().toString();
        } else {
            conversetion = req.body.conversationId.trim();
        }
        await repository.createMessage({
            id: guid.raw().toString(),
            conversationId: conversetion,
            from: req.body.from,
            to: req.body.to,
            text: req.body.text
        });
        res.status(201).send({
            message: 'Menssagem criada com sucesso!'
        });
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição',
            e
        });
    }
}

exports.getMessageById = async (req, res, next) => {
    try {
        let data = await repository.getMessageId(req.params.id);
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição',
            e
        });
    }
}

exports.GetConversationById = async (req, res, next) => {
    try {
        let data = await repository.GetConversationById(req.query.conversetionId);
        res.status(200).send(data);
    }
    catch {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}