const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  role:{ type: String, required: true}
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
