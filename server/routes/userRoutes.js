const express = require("express");
const router = express.Router();
const {registration,login, profile, logout} = require("../controllers/userControllers.js");

router.route("/register").post(registration)
router.route("/login").post(login)
router.route("/").get(profile)
router.route("/logout").post(logout)

module.exports = router;