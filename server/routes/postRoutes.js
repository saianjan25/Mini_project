const express = require("express");
const { createPost, getAllPosts, getPost, deletePost, updatePost } = require("../controllers/postControllers");

const router = express.Router();

//crud

//create
router.route("/new").post(createPost)
router.route("/").get(getAllPosts)
router.route("/:id").get(getPost).delete(deletePost).patch(updatePost)
//read
//all posts
//individual post


//update


//delete


//likes for post


//comments for post

module.exports = router;