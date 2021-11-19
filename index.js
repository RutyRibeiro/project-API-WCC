const express = require("express");

const app = express();
const port = 8089;

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Dasa Educa - artigos");
});

const database = require("./models");
// database.sequelizeDatabase.sync({force:true}).then(() => {
//     console.log("drop and re-sync db.")
// });

const router = require("./routes/articles.routes");
router(app)

app.listen(port, () =>{
    console.log(`Listening port: ${port}`)
});