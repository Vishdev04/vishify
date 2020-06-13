const bcrypt = require("bcrypt");
const _ = require("lodash");
const Joi = require("@hapi/joi");
const express = require("express");
const router = express.Router();
const { User } = require("../models/userModel");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).json({ error: "Invalid Email or Password" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    res.status(400).json({ error: "Invalid Email or Password" });

  token = user.generateAuthToken();

  res.json({ authToken: token, user: user });
});

function validate(user) {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(user);
}

module.exports = router;
