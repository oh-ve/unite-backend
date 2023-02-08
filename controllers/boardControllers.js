const Board = require("../schemas/Board");

const getAllPosts = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json({ boards });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOnePost = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    res.status(200).json({ board });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, user, user_id } = req.body;
    const board = await Board.create({ title, content, user, user_id });
    res.status(201).json({ success: true, board });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updatePost = async (req, res) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, board });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deletePost = async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    res.status(200).json({ response: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllPostsFromUser = async (req, res) => {
  try {
    const user_id = req.user._id;
    const posts = await Board.find({ user_id }).populate("user");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllPosts = async (req, res) => {
  try {
    const deletedPosts = await Board.deleteMany({});
    if (deletedPosts.deletedCount === 0) {
      return res.status(404).json({ error: "No posts found to delete." });
    }
    res
      .status(200)
      .json({ message: `Deleted ${deletedPosts.deletedCount} posts.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReply = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    board.replies.push({ content: req.body.content });
    await board.save();
    res.status(201).json({ success: true, board });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllReplies = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    res.status(200).json({ replies: board.replies });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  createReply,
  getAllReplies,
  getAllPostsFromUser,
  deleteAllPosts,
};
