const express = require("express");
const app = express.Router();

const {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage,
  getAllMessagesFromUser,
} = require("../controllers/messageControllers");

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllMessagesFromUser).post(createMessage);

app
  .route("/user/:id")
  .get(getOneMessage)
  .put(updateMessage)
  .delete(deleteMessage);

app.route("/admin").get(getAllMessages);

// app.route("/sent").get(queriedMessages);

module.exports = app;
