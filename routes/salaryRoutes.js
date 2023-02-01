const express = require("express");

const {
  getAllSalaries,
  createSalary,
  queriedSalaries,
} = require("../controllers/salaryControllers");

const app = express.Router();

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllSalaries).post(createSalary);
app.route("/calculate/:age/:gender/:yearsOfEmployment").get(queriedSalaries);

module.exports = app;
