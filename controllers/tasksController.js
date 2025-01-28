const Task = require("../models/taskModel");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const singleTask = await Task.findById(id);

  if (!singleTask) {
    return next(createCustomError("Task not found", 404));
  }

  res.status(200).json({ task: singleTask });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const task = await Task.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError("Task not found", 404));
  }

  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete({ _id: id });

  if (task !== null) {
    return res.status(200).json({ success: true, data: task });
  } else {
    return next(createCustomError("Task not found", 404));
  }
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
