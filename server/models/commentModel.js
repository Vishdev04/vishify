const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { ObjectId } = mongoose.Schema.Types;

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    comment: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    commentBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    subComments: {
      tpe: Array.
      ref: "Comment"
    }
    commentdate: {
      type: Date,
      default: Date.now,
    },
  })
);

function validateComment(comment) {
  const schema = Joi.object({
    comment: Joi.string().required(),
  });

  return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
