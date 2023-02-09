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
    return res.status(400).json({ error: "Please fill all fieldsss" });
  }

  try {
    const newSalary = await Salary.create({
      salary,
      position,
      age,
      gender,
      yearsOfEmployment,
    });
    res.status(201).json(newSalary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const queriedSalaries = async (req, res) => {
  const {
    age: ageParam,
    gender,
    yearsOfEmployment: yearsOfEmploymentParam,
  } = req.params;

  console.log(parseInt(ageParam) - 5);
  console.log(parseInt(ageParam) + 5);
  console.log(parseInt(yearsOfEmploymentParam) - 5);
  console.log(parseInt(yearsOfEmploymentParam) + 5);

  try {
    const salaries = await Salary.find().where({
      $and: [
        { age: { $lte: parseInt(ageParam) + 5 } },
        { age: { $gte: parseInt(ageParam) - 5 } },
      ],
      gender: gender,
      $or: [
        { yearsOfEmployment: { $lte: parseInt(ageParam) + 5 } },
        { yearsOfEmployment: { $gte: parseInt(ageParam) - 5 } },
      ],
    });
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllSalaries = async (req, res) => {
  try {
    const deletedSalaries = await Salary.deleteMany({});
    if (deletedSalaries.deletedCount === 0) {
      return res.status(404).json({ error: "No salaries found to delete." });
    }
    res
      .status(200)
      .json({ message: `Deleted ${deletedSalaries.deletedCount} salaries.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSalaries,
  createSalary,
  queriedSalaries,
  deleteAllSalaries,
};
