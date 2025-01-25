function getAllTasks(req, res) {
  res.json(req.body);
}

function getTask(req, res) {
  res.json({ id: req.params.id });
}

function createTask(req, res) {
  res.json(req.body);
}

function updateTask(req, res) {
  res.json({ id: req.params.id });
}

function deleteTask(req, res) {
  res.json({ id: req.params.id });
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
