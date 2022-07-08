const mongoose = require("mongoose");

// Step 1: Create a Schema for Comments
const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//step 2:- Connect the schema to the comment collection

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
