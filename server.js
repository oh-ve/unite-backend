const express = require("express");

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("dotenv").config();

const connectDB = require("./dbinit");

connectDB();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Workers of the world, unite!");
});

app.listen(PORT, () => {
  console.log(`The revolution is happening on http://localhost:${PORT}`);
});

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const salaryRoutes = require("./routes/salaryRoutes");

app.use("/salary", salaryRoutes);

const messageRoutes = require("./routes/messageRoutes");

app.use("/message", messageRoutes);

const boardRoutes = require("./routes/boardRoutes");

app.use("/board", boardRoutes);

const eventRoutes = require("./routes/eventRoutes");

app.use("/events", eventRoutes);
