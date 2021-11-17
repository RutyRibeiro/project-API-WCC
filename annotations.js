const express = require("express");

const app = express();

const port = 8089;

app.use(express.json())

app.get("/", function(req,res){
    res.send("Hello world");
});

app.get("/parameters",function(req,res){
    res.send(req.query.name)
});

app.post("/my-first-post", (req,res) => {
    console.log(req.body)
    res.send("post works")
});

app.put("/my-first-put/:id", (req,res) => {
    console.log(req.body, req.params.id)
    res.send("put works")
});

app.delete("/my-first-delete/:id", (req,res) => {
    console.log(req.params.id)
    res.send("delete works")
});

app.listen(port, function(){
    console.log(`Listening port: ${port}`)
});