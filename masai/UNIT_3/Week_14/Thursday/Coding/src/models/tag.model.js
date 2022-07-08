const mongoose= require("mongoose");

// Step 1: Create a Schema for Tags

const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//step 2:- Connect the schema to the Tags collection

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;