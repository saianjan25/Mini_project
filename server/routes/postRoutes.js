const express = require("express");
const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postControllers");

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPost).delete(deletePost).patch(updatePost);

module.exports = router;
