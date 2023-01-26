const Salary = require("../schemas/Salary");

const getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSalary = async (req, res) => {
  const { salary, position, age, gender, yearsOfEmployment } = req.body;

  let emptyFields = [];

  if (!salary) {
    emptyFields.push("salary");
  }
  if (!position) {
    emptyFields.push("position");
  }
  if (!age) {
    emptyFields.push("age");
  }
  if (!gender) {
    emptyFields.push("gender");
  }
  if (!yearsOfEmployment) {
    emptyFields.push("yearsOfEmployment");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const salary = await Salary.create({
      salary,
      position,
      age,
      gender,
      yearsOfEmployment,
    });
    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllSalaries, createSalary };
