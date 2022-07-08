const mongoose = require("mongoose");
const User = require("./user.model");
const studentSchema = new mongoose.Schema(
  {
    roll_number: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    batch: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
