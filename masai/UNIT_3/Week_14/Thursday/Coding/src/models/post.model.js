const mongoose = require("mongoose");

// Step 1: Create a Schema for post

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
    ],
  },
  {
    versionKey: false, // removed__v
    timestamps: true, //CreatedAt,UpdatedAt
  }
);

//step 2:- Connect the schema to the post collection

const Post = mongoose.model("post", postSchema);

module.exports = Post;
