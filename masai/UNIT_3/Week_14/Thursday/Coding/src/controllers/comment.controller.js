const express = require("express");

const Comment = require("../models/comment.model");

const crudController = require("./crud.Controller");

const router = express.Router();

router.post("", crudController.post(Comment));

router.get("", crudController.get(Comment));

router.get("", crudController.getOne(Comment));

router.patch("/:id", crudController.updateOne(Comment));

router.delete("/:id", crudController.deleteOne(Comment));

module.exports = router;
