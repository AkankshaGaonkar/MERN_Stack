const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
 res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
var weight=parseFloat(req.body.num1);
var height=parseFloat(req.body.num2);
var result = weight/ (height*weight);
    res.send("Your BMI is "+result);
    
});
app.get("/aboutme",function(req,res){
    res.send("Hi!Iam a full stack developer");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
