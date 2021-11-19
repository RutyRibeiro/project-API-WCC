// regras de negócio do sistema artigos
const { response } = require("express");
const { articles } = require("../models");
const database = require("../models");
const articleTable = database.articles

// cria um novo artigo
exports.create = (req,res) => {
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

exports.getAll = (req,res) => {
    const articles = articleTable.findAll().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send("Ocorreu um erro obtendo artigos")
    });
}
 