const express = require("express");

const {
  loginUser,
  signUpUser,
  getAllUsers,
  getOneUser,
  deleteAllUsers,
} = require("../controllers/userControllers");

const app = express.Router();

//Login
app.post("/login", loginUser);

//Signup
app.post("/signup", signUpUser);

app.get("/users", getAllUsers);
app.get("/:id", getOneUser);

app.delete("/delete", deleteAllUsers);

module.exports = app;
