const express = require("express");
const app = express.Router();

const {
  getAllPost,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  createReply,
  getAllPosts,
  getAllReplies,
  getAllPostsFromUser,
} = require("../controllers/boardControllers");

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllPosts).post(createPost);

app.route("/user/:user_id").get(getAllPostsFromUser);

app.route("/:id").get(getOnePost).put(updatePost).delete(deletePost);

app.route("/:id/replies").post(createReply).get(getAllReplies);

module.exports = app;
