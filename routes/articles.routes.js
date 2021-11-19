/*
GET 
    - obter todos os artigos
    - obter apenas um artigo especifico
    - obter todos os artigos publicados

POST
    - criar um novo artigo

PUT
    - publicar meu artigo

DELETE
    - deletar um artigo 
*/

module.exports = (app) =>{
    const articleController = require("../controllers/articles.controller")
    let router = require("express").Router();

    router.post("/", articleController.create);

    app.use("/articles",router );
} 