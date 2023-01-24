const Message = require("../schemas/Message");

const getAllMessages = async (req, res) => {
  try {
    const message = await Message.find();
    res.status(200).json({
      message,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getOneMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(req.params.id);
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
    const { text, date } = req.body;
    console.log("req.body:", req.body);
    const message = await Message.create({ text, date });
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
