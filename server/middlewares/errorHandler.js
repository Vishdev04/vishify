const winston = require("winston");

module.exports = function (err, req, res, next) {
  console.log(err);
  res.status(500).json({ error: "Something Failed: " });
};
