const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  console.log("connected to db");
  return mongoose.connect(
    "mongodb+srv://Sankyaaaaa07:145266268@newcluster.8vjkb.mongodb.net/ny_back?retryWrites=true&w=majority"
  );
};

const productController = require("./controllers/product.controller");
const registerController= require("./controllers/register.controller");



const app = express();
app.use(express.json());
app.set("view engine", "ejs");



app.use("/products", productController);
app.use("/register",registerController);



app.listen(6663, async () => {
  await connect();
  console.log("hi, you are listening  to 6663");
});
