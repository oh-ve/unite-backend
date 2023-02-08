const Message = require("../schemas/Message");

const getAllMessagesFromUser = async (req, res) => {
  try {
    const user_id = req.user._id;
    const messages = await Message.find({ user_id }).populate("user");
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate("user");
    res.status(200).json({ messages });
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
    const { text, user, user_id } = req.body;
    console.log("req.body:", req.body);
    const message = await Message.create({ text, user, user_id });
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

const deleteAllMessages = async (req, res) => {
  try {
    const deletedMessages = await Message.deleteMany({});
    if (deletedMessages.deletedCount === 0) {
      return res.status(404).json({ error: "No messages found to delete." });
    }
    res
      .status(200)
      .json({ message: `Deleted ${deletedMessages.deletedCount} messages.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const queriedMessages = async (req, res) => {
//   const { _id } = req.body;

//   try {
//     const messages = await Message.find().where({
//       _id: _id,
//     });
//     res.status(200).json(salaries);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = {
  getAllMessages,
  getOneMessage,
  createMessage,
  updateMessage,
  deleteMessage,
  getAllMessagesFromUser,
  deleteAllMessages,
};
