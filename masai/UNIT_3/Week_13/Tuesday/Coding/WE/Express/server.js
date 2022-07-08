const express = require("express");
console.log("express:", express);

const users=require("./MOCK_DATA.json");

const app = express();



app.get("/users", function (req, res) {
  res.send(users);
});

// starting the server

app.listen(2345, function () {
  console.log("listening on port 2345");
});
