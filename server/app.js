const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Tracker API Running...");
});

module.exports = app;

