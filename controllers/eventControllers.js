const Event = require("../schemas/Event");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json({
      event,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, description, start, end } = req.body;
    const event = await Event.create({ title, description, start, end });
    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({
      response: "Event deleted",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteAllEvents = async (req, res) => {
  try {
    const deletedEvents = await Event.deleteMany({});
    if (deletedEvents.deletedCount === 0) {
      return res.status(404).json({ error: "No events found to delete." });
    }
    res
      .status(200)
      .json({ message: `Deleted ${deletedEvents.deletedCount} events.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents,
};
