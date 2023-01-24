const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  salary: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  yearsOfEmployment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Salary", salarySchema);
