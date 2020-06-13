// const config = require("config");
const winston = require("winston");

module.exports = function () {
  if (!process.env.jwtPrivateKey) {
    winston.error("FATAL ERROR: jwtPrivateKey is not defined");
    process.exit(1);
  }
};
