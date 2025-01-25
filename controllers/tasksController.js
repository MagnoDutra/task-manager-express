const Task = require("../models/taskModel");

function getAllTasks(req, res) {
  res.json(req.body);
}

function getTask(req, res) {
  res.json({ id: req.params.id });
}

async function createTask(req, res) {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
}

function updateTask(req, res) {
  res.json({ id: req.params.id });
}

function deleteTask(req, res) {
  res.json({ id: req.params.id });
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
