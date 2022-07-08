

//database connection logic is here


const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};

