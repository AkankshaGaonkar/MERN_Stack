const express = require("express");
const app = express();
app.get("/",function(req,res){
 res.send("<h1>Hello World</h1>");
});
app.get("/aboutme",function(req,res){
    res.send("Hi!Iam a full stack developer");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});