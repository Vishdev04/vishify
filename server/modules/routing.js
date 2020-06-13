require("express-async-errors");
const user = require("../routes/user");
const posts = require("../routes/posts");
const auth = require("../routes/auth");
const errorHandler = require("../middlewares/errorHandler");

module.exports = function (app) {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/posts", posts);
  app.use(errorHandler);
};
