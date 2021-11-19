// database configurations
const dotenv = require("dotenv")

dotenv.config();

module.exports = {
    connectionStringUrl: process.env.DB_CONNECTION_STRING,
    dialect:"postgres"
}