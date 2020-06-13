const express = require("express");
const router = express.Router();
const { Post, validate } = require("../models/postModel");
const auth = require("../middlewares/auth");
const { request } = require("express");
const CircularJSON = require("circular-json");

router.get("/", auth, async (req, res) => {
  console.log("request Made");
  let posts = await Post.find();

  if (!posts) return res.status(404).json({ error: "No post Found" });

  res.json({ posts });
});

router.get("/:id", auth, async (req, res) => {
  const post = await Post.findById(req.param.id);

  if (!post) return res.status(404).json({ error: "No post with that ID" });

  res.json({ post });
});

router.post("/publish", auth, async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  const { title, content, media } = req.body;

  let posts = new Post({
    title,
    content,
    media,
    postedBy: req.user._id,
  });

  try {
    await posts.save();
  } catch (ex) {
    return res.status(400).json({ error: "Error occured: " + ex });
  }

  res.json({ posts });
});

module.exports = router;
