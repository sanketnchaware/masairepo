const express = require("express");
const users = require("./users.json");
const app = express();

// a)Way to write a middleware
// app.use(logger);






//C) Route handlers

app.get("/", logger, function (req, res) {
  res.send("Welcome world");
});

app.get("/users", function (req, res) {
  res.send(users)
});

app.post("/users", logger,function (req, res) {
  console.log("name");
//   console.log(req.body);
  res.send(users)
});

//Route handlers






//B) middleware function
function logger(req, res, next) {
  if(req.query.name==="Sanket"){
      next();
  }
  else{
      res.send("fuck you")
  }

  
  
}

app.listen(4562, function () {
  console.log("hello world");
});
