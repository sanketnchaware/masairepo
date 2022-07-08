const express=require('express');
const users=require('./users.json');
const app=express();




app.get("/",function(req,res){
res.send("Welcome to Home page")
})


app.get("/users",function(req,res){
    res.send(users);
})





app.listen(4568, function(){
    console.log('Listening to port 4568')
})