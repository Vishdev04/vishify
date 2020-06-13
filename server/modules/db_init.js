const mongoose = require("mongoose");
const winston = require("winston");
const logger = "../modules/logger";

module.exports = function () {
  const db = process.env.db;

  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => winston.info(`Connected to MongoDB Server on Atlas....`))
    .catch((err) => winston.error("Error occured:", err));
};
