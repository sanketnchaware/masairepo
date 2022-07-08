const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("", async (req, res) => {
  const users = await User.find().lean().exec();
  return res.send({users});
});

router.post("", async (req, res) => {
  const user = await User.create(req.body);

  return res.send(user);
});

module.exports = router;
