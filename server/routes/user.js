const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/userModel");
const { Post } = require("../models/postModel");
const auth = require("../middlewares/auth");

router.get("/me", auth, async (req, res) => {
  // Look up for the User and return 404 if doesn't Exist
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    res.status(404).json({ error: "Could not find the specified user" });
    return;
  }

  res.json({ user });
});

router.get("/posts", auth, async (req, res) => {
  // Look up for the User and return 404 if doesn't Exist
  const posts = await Post.find({ postedBy: req.user._id });

  if (!posts) {
    res.status(404).json({ error: "Incorrect Request" });
    return;
  }

  res.json({ posts });
});

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  emailCheck = await User.findOne({ email: req.body.email });

  if (emailCheck)
    return res
      .status(400)
      .json({ error: "User with the given Email already exist" });

  let user = new User(
    _.pick(req.body, ["name", "email", "password", "displayProfile"])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();
  } catch (ex) {
    return res.status(400).json({ error: "Error occured: " + ex });
  }

  const token = user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .json({ user: _.pick(user, ["_id", "name", "email", "displayProfile"]) });
});

module.exports = router;
