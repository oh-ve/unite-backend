const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  salary: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  age: {
    type: String,
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
  // user_id: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Salary", salarySchema);
