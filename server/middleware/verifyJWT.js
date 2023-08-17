const jwt = require("jsonwebtoken")
require("dotenv").config();

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(400)
      .json({ Error: "Please provide bearer token" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ Error: "Invalid Token !" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(409)
      .json({ message: " Access Denied !", status: 403 });
  }
};

module.exports = {isAuthenticated}
