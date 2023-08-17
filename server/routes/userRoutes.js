const express = require("express");
const router = express.Router();
const { updateProfile } = require("../controllers/userControllers");

router.route("/profile").patch(updateProfile);
module.exports = router;