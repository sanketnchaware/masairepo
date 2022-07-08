const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};

//step 1:- Create a Schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  gender: { type: String, required: true },
  email: { type: String, required: true },
});

//step 2:- Connect the schema to the users connection
const User = mongoose.model("user", userSchema); //users
const app = express();
app.use(express.json());

//--------------------CRUD API's for user---------------

//post:- create a user object
app.post("/users", async (req, res) => {
  const user = await User.create(req.body); //db.users.insert
  return res.status(201).send({ user });
});

//get :- get all users from collection
app.get("/users", async (req, res) => {
  //exec()=> imcomplete promise into full promise
  const users = await User.find().sort({ id: -1 }).lean().exec(); //db.users.find()//thennable => full promise
  return res.status(200).send({ users });
});

//db.collection.update(query,update,options)
//patch=>update a user
app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  //db.users.update({_id:""},{$set:{}})
  return res.status(200).send({ user });
});

//delete:- delete a single user
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec(); //db.users.remove({_id:})
  return res.status(200).send({ user });
});

//get a single user
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();
  return res.status(200).send({ user });
});

app.listen(5858, async () => {
  await connect();
  //connection bw express and mongo
  console.log("Listening to port 5858");
});
