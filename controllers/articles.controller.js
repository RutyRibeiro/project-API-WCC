// regras de negócio do sistema artigos
const {
    response
} = require("express");
const database = require("../models");
const articleTable = database.articles

// cria um novo artigo
exports.create = (req, res) => {
    
    // object destructuring
    const { titulo,descricao,publicado } = req.body

    const article = {
        titulo,
        descricao,
        publicado,
    };

    if (!article.titulo) {
        return res.status(400).send("O artigo precisa conter ao menos o titulo")
    }
    articleTable.create(article).then(() => res.send("Artigo criado com sucesso")).catch((error) => {
        res.status(500).send("Ocorreu um erro ao salvar o artigo")
        console.log(error)
    });

};

// recupera todos os artigos
exports.getAll = (req, res) => {
    articleTable.findAll().then((data) => {
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
            titulo: req.query.titulo
        }
    }).then((article) => {
        if (article) {
            res.send(article)
        } else {
            res.status(404).send({
                message: `não foi possivel encontrar artigo ${req.query.titulo}`
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
    if (!req.params.id) {
        console.log("Não foi possível encontrar artigo pois o id não foi informado")
        res.status(400).send("Não foi possível encontrar artigo pois o id não foi informado")

    } else {
        articleTable.findByPk(req.params.id).then((article) => {
            if (article) {
                res.send(article)
            } else {
                res.status(404).send({
                    message: `Não foi possivel encontrar o artigo de id ${req.params.id}`
                });
            }
        }).catch((error) => {
            res.status(500).send({
                message: "erro interno ao obter artigo"
            });
        });
    }
};

exports.getAllActives = (req,res) =>{
    articleTable.findAll({where:{publicado: true}}).then(
        (article) =>{
            res.send(article);
        }).catch((error) =>{
            console.log(error)
            res.status(500).send({
                message:"Ocorreu um erro ao encontrar o artigo indicado!"
            });
        })
}

exports.updateOne = (req, res) => {
    if (!req.params.id) {
        console.log("Não foi possível encontrar artigo pois o id não foi informado")
        return res.status(400).send("Não foi possível encontrar artigo pois o id não foi informado")
    }
    articleTable.update(
        req.body, 
        {where:{id:req.params.id}, 
        returning: true}).then(
        (response) =>{
            res.send(response[1])
        }).catch((error) => {
            console.log(error)
            res.status(500).send({message:"Ocorreu um erro ao alterar o artigo indicado!"})}
    )
}

// exports.deleteOne()

exports.deleteAll = (req,res) =>{
    articleTable.destroy({where: {}, truncate: false}
        ).then((deleted)=>{
            res.send(`Foram deletados ${deleted} artigos`)

        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message:"erro ao deletar dados"})}
        )
}

exports.deleteOne = (req,res) =>{
    articleTable.destroy({where: {id:req.params.id}, truncate: false}
        ).then((deleted)=>{
            res.send(`Foram deletados ${deleted} artigos`)

        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message:"erro ao deletar dados"})}
        )
}
