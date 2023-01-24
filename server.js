const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("dotenv").config();

const connectDB = require("./dbinit");

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Workers of the world, unite!");
});

app.listen(PORT, () => {
  console.log(`The revolution is happening on http://localhost:${PORT}`);
});
