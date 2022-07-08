const express = require("express");

const Student = require("../models/student.model");

const router = express.Router();

router.get("", async (req, res) => {
  const student = await Student.find().populate().lean().exec();
  return res.send(student);
});

router.post("", async (req, res) => {
  const student = await Student.create(req.body);

  return res.send(student);
});

module.exports = router;
