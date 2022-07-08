const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  new mongoose.connect("mongodb://127.0.0.1:27017/jobs");
};

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  skill: { type: String, required: true },
  WFH: { type: Boolean, required: true },
  notice_period: { type: Number, required: true },
  rating: { type: Number, required: true },
});

const role=mongoose.model("role", jobSchema);
const app = express();


app.get("/roles",async (req, res) => {
    const roles=await role.find({}).lean().exec();
   return res.status(200).send({roles});
})

app.get("/roles/:location",async (req, res) => {
    const roles=await role.find({location:req.params.location}).lean().exec();
   return res.status(200).send({roles});
})


// app.get("/roles/:WFH",async (req, res) => {
//     const roles=await role.find({WFH:req.params.WFH}).lean().exec();
//    return res.status(200).send({roles});
// })






app.listen(1452, async () => {
  await connect();
  console.log("Hello world!");
});
