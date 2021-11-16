const express = require("express");

const app = express();

const port = 8089;

app.get("/", function(req,res){
    res.send("Hello world");
});

app.get("/parameters",function(req,res){
    res.send(req.query.name)
});

app.listen(port, function(){
    console.log(`Listening port: ${port}`)
});