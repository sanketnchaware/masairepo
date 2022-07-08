const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller");
const tagController = require("./controllers/tag.controller");

const app = express();

app.use(express.json());
 
app.use("/users",userController);
app.use("/posts",postController);
app.use("/comments",commentController);
app.use("/tags",tagController);  



//Listening to the port 4551
app.listen(8931, async () => {
  await connect();
  //connection bw express and mongo
  console.log("Listening to port 8931");
});




