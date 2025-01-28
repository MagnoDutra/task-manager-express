const Task = require("../models/taskModel");
const asyncWrapper = require("../middlewares/async-wrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const singleTask = await Task.findById(id);

  if (!singleTask) return res.status(404).json({ message: "n encontrado" });

  res.status(200).json({ task: singleTask });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const task = await Task.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ message: "couldnt find with this id" });
  }

  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete({ _id: id });

  if (task !== null) {
    return res.status(200).json({ success: true, data: task });
  } else {
    return res
      .status(404)
      .json({ success: false, message: "Couldnt find with this id" });
  }
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
