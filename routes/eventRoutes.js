const express = require("express");
const app = express.Router();

const {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents,
} = require("../controllers/eventControllers");

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllEvents).post(createEvent).delete(deleteAllEvents);

app.route("/:id").get(getOneEvent).put(updateEvent).delete(deleteEvent);

module.exports = app;
