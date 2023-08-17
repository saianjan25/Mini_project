const express = require("express");
const { getProfile } = require("../controllers/profileController");
const { getPost } = require("../controllers/postControllers");
const router = express.Router();

router.route("/:id").get(getProfile)
module.exports = router;