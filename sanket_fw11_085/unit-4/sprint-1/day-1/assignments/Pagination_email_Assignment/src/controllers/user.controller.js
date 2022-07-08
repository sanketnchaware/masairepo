const express = require("express");

const User = require("../models/user.model");

const sendMail = require("../utils/sendMail");

const router = express.Router();

router.post("", getAdmin, async (req, res) => {
  const user = await User.create(req.body);

  sendMail({
    from: "pg@gmail.com",
    to: req.body.email,
    subject: `Welcome to ABC Systems ${req.body.first_name} ${req.body.last_name}`,
    text: `Hi ${req.body.first_name},Please confirm your email address`,
    html: `<p>Hi ${req.body.first_name},Please confirm your email address,</p>`,
  });
  return res.send({ user });
});

router.get("", async (req, res) => {
  const users = await User.find();
  return res.send({ users });
});

async function getAdmin(req, res, next) {
  var adminArr = [];

  const admins = await User.find({ role: "admin" });
  console.log(admins);

  for (let i = 0; i < admins.length; i++) {
    adminArr.push(admins[i].email);
  }
  sendMail({
    from: "pg@gmail.com",
    to: [adminArr.join(",")],
    subject:`${req.body.first_name} ${req.body.last_name} has registered with us`,
    text: `Please welcome ${req.body.first_name} ${req.body.last_name} `,
    html: `Please welcome ${req.body.first_name} ${req.body.last_name} `,
  });

  next();
}

module.exports = router;
