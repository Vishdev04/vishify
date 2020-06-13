const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { ObjectId } = mongoose.Schema.Types;

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    content: {
      type: String,
      required: true,
      minlength: 5,
    },
    media: [String],
    postedBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    publishdate: {
      type: Date,
      default: Date.now,
    },
  })
);

function validatePost(post) {
  const schema = Joi.object({
    title: Joi.string().required().min(5),
    content: Joi.string().required(),
    media: Joi.string(),
  });

  return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
