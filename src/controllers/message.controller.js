const repository = require('../repositories/message.repository');
const guid = require('guid');

// Chama o repositorio para inserir uma nova menssagem na base
exports.sendMessage = async (req, res, next) => {
    let conversetion = ''
    try {
        // Verifica se o id da conversa foi passada se não gera um novo;
        if( req.body.conversationId.trim() == '' || 
            req.body.conversationId == 'null') {
                // Define o conversetionid com um guid 
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
        // Retorna um statuscode(created) e uma mensagem de sucesso.
        res.status(201).send({
            message: 'Menssagem criada com sucesso!'
        });
    }
    catch (e) {
        // Loga um erro no servidor
        console.log(e);
        // Retorna um statuscode(internalServerError) e uma menssagem de falha
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

// Chama o repositorio para recuperar menssagem pelo id
exports.getMessageById = async (req, res, next) => {
    try {
        let data = await repository.getMessageId(req.params.id);
        res.status(200).send(data);
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

// Lista um conversa procurando pelo id da mesma
exports.GetConversationById = async (req, res, next) => {
    try {
        let data = await repository.GetConversationById(req.query.conversetionId);
        res.status(200).send(data);
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}