const  mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
});


const Product= mongoose.model("product",productSchema);

module.exports = Product;
