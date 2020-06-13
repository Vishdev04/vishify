const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access Denied! No Token Found");

  try {
    const decoded = jwt.verify(token, process.env.jwtPrivateKey);
    req.user = decoded;

    next();
  } catch {
    res.status(400).send("Invalid Token");
  }
};
