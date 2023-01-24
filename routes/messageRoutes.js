const express = require("express");
const app = express.Router();

const {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageControllers");

app.route("/").get(getAllMessages).post(createMessage);

app.route("/:id").get(getOneMessage).put(updateMessage).delete(deleteMessage);

module.exports = app;
