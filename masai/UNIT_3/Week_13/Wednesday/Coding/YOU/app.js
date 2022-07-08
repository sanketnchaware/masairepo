const express= require("express");
 const app= express();

 const books=require("./books.json");


app.get("/",function(req,res){
    res.send(books);
})

app.post("/books",function(req,res){
    res.send("hello")
    
 }) 





 app.listen(4512, function(){
     console.log("Listening to port 4512 ");
 })





