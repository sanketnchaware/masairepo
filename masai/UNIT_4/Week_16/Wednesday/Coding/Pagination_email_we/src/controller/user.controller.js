const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("", async (req, res) => {
  //if  page=1 then show 1 to 10
  //if  page=2 then show 10 to 20

  const page = +req.query.page || 1;
  const size = +req.query.size || 10;

  const offset = (page - 1) * size;

  

  const totalUserCount = await User.find().countDocuments();

  const totalPages = Math.ceil(totalUserCount / size);
  const users = await User.find().skip(offset).limit(10).lean().exec();

  return res.send({users,totalPages});
});

module.exports = router;
