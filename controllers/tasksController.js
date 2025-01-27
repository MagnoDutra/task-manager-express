const Task = require("../models/taskModel");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

async function getTask(req, res) {
  const { id } = req.params;

  try {
    const singleTask = await Task.findById(id);

    if (!singleTask) return res.status(404).json({ msg: "n encontrado" });

    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

function updateTask(req, res) {
  res.json({ id: req.params.id });
}

function deleteTask(req, res) {
  res.json({ id: req.params.id });
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
