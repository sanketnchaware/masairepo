const mongoose = require("mongoose");

//step 1:- Create a Schema for user
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: true },
});

//step 2:- Connect the schema to the users collection
const User = mongoose.model("user", userSchema);

module.exports =User;
