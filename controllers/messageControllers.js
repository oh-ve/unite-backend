const Message = require("../schemas/Message");

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate("user");
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id).populate("user");
    res.status(200).json({
      message,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createMessage = async (req, res) => {
  try {
    const { text, user } = req.body;
    console.log("req.body:", req.body);
    const message = await Message.create({ text, user });
    res.status(201).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdandUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdandDelete(req.params.id);
    res.status(200).json({
      response: "Message deleted",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage,
};
