const repository = require('../repositories/bot.repository');
const guid = require('guid');

exports.create = async (req, res, next) => {
    // Verifica se o nome do bot possui menos de 3 caracteres.
    if (req.body.name.length < 3) {
        res.status(400).send({ message: 'O nome não pode conter menos de três caracteres.' }).end();
        return;
    } else {
        try {
            await repository.createBot({
                id: guid.raw().toString(),
                name: req.body.name
            });
            res.status(201).send({
                message: 'Bot criado!'
            });
        } catch (e) {
            console.log(e);
            res.status(500).send({
                message: 'Falha ao processar a requisição'
            });
        }
    }
}

exports.list = async (req, res, next) => {
    try {
        let data = await repository.findAll();
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.getBot = async (req, res, next) => {
    try {
        let data = await repository.findBotById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.rename = async (req, res, next) => {
    try {
        console.log(e);
        let data = await repository.updatedBot(req.params.id, req.body.name);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar o bot!'
        });
    };
}

exports.deleteBot = async (req, res, next) => {
    try {
        await repository.deleteBot(req.params.id);
        res.status(200).send({
            message: 'Bot excluido com sucesso!'
        })
    } catch (e) {
        console.log(e);
        res.status(400).send({
            message: 'Falha ao excluir o bot!'
        });
    }
}