const express = require("express");
const tasksRouter = require("./routes/tasksRoute");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();
