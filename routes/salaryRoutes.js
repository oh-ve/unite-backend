const express = require("express");

const {
  getAllSalaries,
  createSalary,
} = require("../controllers/salaryControllers");

const app = express.Router();

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllSalaries).post(createSalary);

module.exports = app;
