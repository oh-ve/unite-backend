const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BulletinBoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  user_id: {
    type: String,
    required: true,
  },
  replies: [ReplySchema],
});

module.exports = BulletinBoard = mongoose.model(
  "bulletinBoard",
  BulletinBoardSchema
);
