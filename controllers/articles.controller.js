// regras de negócio do sistema artigos
const database = require("../models");
const articleTable = database.articles

// cria um novo artigo
exports.create = (req, res) => {
    const article = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        publicado: req.body.publicado,
    };

    articleTable.create(article).then(() => res.send("Artigo criado com sucesso")).catch((error) => {
        res.status(500).send("Ocorreu um erro ao salvar o artigo")
        console.log(error)
    })
};

// recupera todos os artigos
exports.getAll = (req, res) => {
    const articles = articleTable.findAll().then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send("Ocorreu um erro obtendo artigos")
    });
}

// recupera um artigo pelo título
exports.getOneByTitle = (req, res) => {
    articleTable.findOne({
        where: {
            titulo: req.body.titulo
        }
    }).then((article) => {
        if (article) {
            res.send(article)
        } else {
            res.status(404).send({
                message: `não foi possivel encontrar artigo ${req.body.titulo}`
            })
        }
    }).catch((error) => {
        console.log(error)
        res.status(500).send({
            message: `Ocorreu um erro interno ao encontrar o artigo`
        })
    })
};

// recupera um artigo pelo ID
exports.getOneById = (req, res) => {
    articleTable.findByPk(req.body.id).then((article) => {
        if (article) {
            res.send(article)
        } else {
            res.status(404).send({
                message: `Não foi possivel encontrar o artigo de id ${req.body.id}`
            });
        }
    }).catch((error) => {
        res.status(500).send({
            message: "erro interno ao obter artigo"
        });
    });
};