const Task = require("../models/taskModel");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getTask(req, res) {
  const { id } = req.params;

  try {
    const singleTask = await Task.findById(id);

    if (!singleTask) return res.status(404).json({ message: "n encontrado" });

    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ message: error });
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

async function updateTask(req, res) {
  const { id } = req.params;
  const data = req.body;

  try {
    const task = await Task.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: "couldnt find with this id" });
    }

    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete({ _id: id });

    if (task !== null) {
      return res.status(200).json({ success: true, data: task });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Couldnt find with this id" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
