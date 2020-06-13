const express = require("express");
const winston = require("winston");
require("dotenv").config();

const app = express();
app.use(express.json());

// Importing & initialising all the startup config Files from module
require("./modules/logger")();
require("./modules/routing")(app);
require("./modules/config")();
require("./modules/db_init")();

// Sending a default responce on Home Route
app.get("/", (req, res) => {
  res.send("<h1>Hello vishify API</h1>");
});

// Listening from a PORT from environment variable
// and Staring Server on that port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  winston.info(`Listening to port ${port}`);
});

module.exports = server;
