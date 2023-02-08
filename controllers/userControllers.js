const User = require("../schemas/User");
const jwt = require("jsonwebtoken");

const createToken = (_id, firstName, lastName, company) => {
  return jwt.sign({ _id, firstName, lastName, company }, process.env.SECRET, {
    expiresIn: "1d",
  });
};

// login user
const loginUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(
      user._id,
      user.firstName,
      user.lastName,
      user.company
    );

    res.status(200).json({ email, token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password, company, isAdmin } = req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      email,
      password,
      company,
      isAdmin
    );
    //create token
    const token = createToken(
      user._id,
      user.firstName,
      user.lastName,
      user.company
    );
    res
      .status(200)
      .json({ firstName, lastName, email, token, company, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = { loginUser, signUpUser, getAllUsers, getOneUser };
