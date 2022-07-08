const express = require("express");
const User = require("../models/register.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.render("register");
});

module.exports = router;
