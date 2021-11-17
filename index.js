const express = require("express");

const app = express();

const port = 8089;

app.use(express.json())

app.get("/", function(req,res){
    res.send("Dasa Educa - artigos");
});


app.listen(port, function(){
    console.log(`Listening port: ${port}`)
});