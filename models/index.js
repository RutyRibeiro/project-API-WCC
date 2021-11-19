const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize")

const sequelizeOptions = { dialect: dbConfig.dialect}
const sequelizeDatabase = new Sequelize(dbConfig.connectionStringUrl,sequelizeOptions)


const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

database.articles = require("./articles.models.js")(sequelizeDatabase, Sequelize) 
module.exports = database;