const express = require("express");
const connectDB = require("./db/connect");
const tasksRouter = require("./routes/tasksRoute");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

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
