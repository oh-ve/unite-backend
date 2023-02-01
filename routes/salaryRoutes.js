const express = require("express");

const {
  getAllSalaries,
  createSalary,
  queriedSalaries,
  deleteAllSalaries,
} = require("../controllers/salaryControllers");

const app = express.Router();

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

app.route("/").get(getAllSalaries).post(createSalary).delete(deleteAllSalaries);
app.route("/calculate/:age/:gender/:yearsOfEmployment").get(queriedSalaries);

module.exports = app;
