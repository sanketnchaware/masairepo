const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};

//-----------------------------------------------------------------
//BLOGS :-Facebook POSTS
// posts,comments,tags,user

//step 1:- Create a Schema for user
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: true },
});

//step 2:- Connect the schema to the users collection
const User = mongoose.model("user", userSchema);

//---------------------------------------------------------------------

// Step 1: Create a Schema for post

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
    ],
  },
  {
    versionKey: false, // removed__v
    timestamps: true, //CreatedAt,UpdatedAt
  }
);

//step 2:- Connect the schema to the post collection

const Post = mongoose.model("post", postSchema);

//---------------------------------------------

// Step 1: Create a Schema for Comments
const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//step 2:- Connect the schema to the comments collection

const Comment = mongoose.model("comment", commentSchema);

//----------------------------------------------------------------

// Step 1: Create a Schema for Tags

const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//step 2:- Connect the schema to the Tags collection

const Tag = mongoose.model("tag", tagSchema);

//-----------------------------------------------------------------

const app = express();
app.use(express.json());

//--------------------CRUD API's for user---------------

//post:- create a user object
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).send({ user });
});

//get :- get all users from collection
app.get("/users", async (req, res) => {
  const users = await User.find().sort({ id: -1 }).lean().exec();
  return res.status(200).send({ users });
});

app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();

  return res.status(200).send({ user });
});

//delete:- delete a single user
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ user });
});

//get a single user
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();
  return res.status(200).send({ user });
});

//get all post of specific user
 
app.get("/users/:id/posts", async (req, res) => {
    const posts=await Post.find({author: req.params.id}).lean().exec();
    const author=await User.findById(req.params.id).lean().exec();
    return res.status(200).send({posts,author});
})


//--------------------CRUD API's for post---------------

//1.post
app.post("/posts", async (req, res) => {
  const post = await Post.create(req.body);
  return res.status(201).send({ post });
});

//2.get all post

app.get("/posts", async (req, res) => {
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

//3.get single post

app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id).lean().exec();
  return res.status(200).send({ post });
});

//4.update a single post

app.patch("/posts/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({ post });
});

//5.delete a single post

app.delete("posts/:id", async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ post });
});


//6.get all comments for a post

app.get("/posts/:id/comments", async (req, res) => {
  const comments=await Comment.find({post:req.params.id}).lean().exec();
  const post=await Post.findById(req.params.id);
  return res.status(200).send({ comments,post });
})

 


//--------------------CRUD API's for comments---------------
//post a comment
app.post("/comments", async (req, res) => {
  const comment = await Comment.create(req.body);
  return res.status(201).send({ comment });
});

//get all comments
app.get("/comments", async (req, res) => {
  const comments = await Comment.find().lean().exec();
  return res.status(200).send({ comments });
});

//get single comment

app.get("/comments/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id).lean().exec();
  return res.status(200).send({ comment });
});

//update a single comment

app.patch("/comments/:id", async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({ comment });
});

//5.delete a single post

app.delete("comments/:id", async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ comment });
});

//----------------------------------------------------------

//--------------------CRUD API's for tags---------------
//post a tag
app.post("/tags", async (req, res) => {
  const tag = await Tag.create(req.body);
  return res.status(201).send({ tag });
});

//get all tags
app.get("/tags", async (req, res) => {
  const tags = await Tag.find().lean().exec();
  return res.status(200).send({ tags });
});

//get single tag

app.get("/tags/:id", async (req, res) => {
  const tag = await Tag.findById(req.params.id).lean().exec();
  return res.status(200).send({ tag });
});

//update a single tag

app.patch("/tags/:id", async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).send({ tag });
});

//5.delete a single tag

app.delete("/tags/:id", async (req, res) => {
  const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).send({ tag });
});

//----------------------------------------------------------

//Listening to the port 4551
app.listen(4551, async () => {
  await connect();
  //connection bw express and mongo
  console.log("Listening to port 4551");
});
