const repository = require('../repositories/bot.repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name
        });
        res.status(201).send({
            message: 'Bot criado!'
        });
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    }
    catch {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    }
    catch {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.updated = async (req, res, next) => {
    try {
        await repository.updated(req.body);
        res.status(200).send({
            message: 'Bot atualizado com sucesso!'
        });
    }
    catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar o bot!',
            e
        });
    };
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Bot excluido com sucesso!'
        })
    }
    catch (e) {
        res.status(400).send({
            message: 'Falha ao excluir o bot!',
            e
        });
    }
}

