const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/store");
};

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: false },
});

const Product = mongoose.model("product", productSchema);
const app = express();
app.use(express.json());

//1.Create

app.post("/products", async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).send({ product });
});

//get product

app.get("/products", async (req, res) => {
  const product = await Product.find().lean().exec();
  return res.status(200).send({ product });
});

app.patch("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({ product });
});

app.delete("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ product });
});

app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id).lean().exec();
  return res.status(200).send({ product });
});

app.listen(6565, async () => {
  await connect();
  console.log("Listening to port 6565");
});



//  id
// movie_name
// movie_genre
// production_year ( between 1990 to 2020)
// budget ( 9000 to 20000)

// see all movies
// add a new movie
// get a single movie
// update a movie
// delete a movie