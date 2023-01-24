const User = require("../schemas/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;

  try {
    const user = await User.login(
      firstName,
      lastName,
      email,
      password,
      isAdmin
    );

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup(firstName, lastName, email, password);
    //create token
    const token = createToken(user._id);
    res.status(200).json({ firstName, lastName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message, isItMe: "or is it youu" });
  }
};

module.exports = { loginUser, signUpUser };
