// model of the table arcticles

// título, descrição, publicado

module.exports = (sequelizeDatabase, Sequelize) => {
    const Article = sequelizeDatabase.define("artigos",{
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }

    });

    return Article;
}