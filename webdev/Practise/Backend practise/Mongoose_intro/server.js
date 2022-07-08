const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/revise");
};

// Create a Schema

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

// Connect Schema to Collection

const User = mongoose.model("user", userSchema);

const app = express();

app.use(express.json());

// Crud IPS
app.post("/users", async function (req, res) {
  const user = await User.create(req.body).lean().exec();
  return res.status(201).send({ user });
});
app.get("/users", async function (req, res) {
  const users = await User.find().lean().exec();
  res.status(200).send({ users });
});

app.patch("/users/:id", async function (req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();

  res.status(200).send({ user });
});

app.delete("/users/:id", async function (req, res) {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  res.status(200).send({ user });
});

app.get("/users/:id", async function (req, res) {
  const user = await User.findById(req.params.id).lean().exec();
  res.status(200).send({ user });
});

//  lean()=> it will convert mongo object to json object
//  exec()=> without exec() it will not be proper promise exec will convert it to proper promise i.e half promise to full promise

app.listen(5551, async () => {
  await connect();
  console.log("Server is running on port 5551");
});
