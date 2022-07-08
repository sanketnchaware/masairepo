const express = require("express");

const Post = require("../models/post.model");

const Comment = require("../models/comment.model");

const crudController = require("./crud.Controller");

const router = express.Router();

router.post("", crudController.post(Post));

router.get("", async (req, res) => {
  const posts = await Post.find()
    .populate({
      path: "author",
      select: "first_name",
    })
    .populate("tags")
    .lean()
    .exec();
  return res.status(200).send({ posts });
});

router.get("/:id", crudController.getOne(Post));

router.patch("/:id", crudController.updateOne(Post));

router.delete("/:id", crudController.deleteOne(Post));

router.get("/:id/comments", async (req, res) => {
  const comments = await Comment.find({ post: req.params.id }).lean().exec();
  const post = await Post.findById(req.params.id);
  return res.status(200).send({ comments, post });
});

module.exports = router;
