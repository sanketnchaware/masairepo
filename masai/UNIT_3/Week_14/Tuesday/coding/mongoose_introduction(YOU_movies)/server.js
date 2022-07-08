const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/entertainment");
};

const movieSchema = new mongoose.Schema({
  movie_name: { type: String, required: true },
  movie_genre: { type: String, required: true },
  production_year: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const Movie = mongoose.model("movie", movieSchema);
const app = express();
app.use(express.json());

app.get("/movies", async (req, res) => {
  const movie = await Movie.find().lean().exec();
  return res.status(200).send({ movie });
});

app.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body);
  return res.status(201).send({ movie });
});

app.get("/movies/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id).lean().exec();
  return res.status(200).send({ movie });
});

app.patch("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({ movie });
});

app.delete("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ movie });
});

app.listen(2226, async () => {
  await connect();
  console.log("Listening to port 2226");
});
