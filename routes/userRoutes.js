const express = require("express");
const { getAllMessages } = require("../controllers/messageControllers");

const {
  loginUser,
  signUpUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/userControllers");

const app = express.Router();

//Login
app.post("/login", loginUser);

//Signup
app.post("/signup", signUpUser);

app.get("/users", getAllUsers);
app.get("/:id", getOneUser);

module.exports = app;
