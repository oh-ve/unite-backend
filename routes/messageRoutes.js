const express = require("express");
const app = express.Router();

const {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageControllers");

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllMessages).post(createMessage);

app.route("/:id").get(getOneMessage).put(updateMessage).delete(deleteMessage);

module.exports = app;
