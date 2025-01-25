const express = require("express");
const tasksRouter = require("./routes/tasksRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.get("/hello", (req, res) => {
  res.send("<h1>Task Manager App</h1>");
});

app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
