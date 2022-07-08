const express = require("express");

const User = require("../models/user.model");

const Post = require("../models/post.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(User));

router.get("", async function (req,res){
  const users=await User.find().lean().exec();
  res.render("all_users.ejs",{
    users:users
  })
});

router.patch("/:id", crudController.updateOne(User));

router.delete("/:id", crudController.deleteOne(User));

router.get("/:id", async function (req,res){
  const  user=await User.findById(req.params.id).all().exec();
  res.render("user.ejs",{
    user:user
  })
});

//get all post of specific user

router.get("/:id/posts", async (req, res) => {
  const posts = await Post.find({ author: req.params.id }).lean().exec();
  const author = await User.findById(req.params.id).lean().exec();
  return res.status(200).send({ posts, author });
});

module.exports = router;
