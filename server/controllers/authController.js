//login , register

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({ message: "Fill all details" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already registered" });
    }
    req.body.password = await bcrypt.hash(password, 10);
    const newUser = await User.create(req.body);
    return res.status(201).json({ message: `${name} has been registered` });
  } catch (err) {
    console.log("Registeration error  : ", err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Fill all details" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Login Failed !" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (isMatched) {
      const token = await jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return res.status(200).json({ message: "Login successful", user, token });
    }
  } catch (err) {
    console.log("Login error : ", err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { login, register };
