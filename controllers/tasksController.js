function getAllTasks(req, res) {
  res.json({ success: true, data: [] });
}

function getTask(req, res) {
  res.send("get single task");
}

function createTask(req, res) {
  res.send("create single task");
}

function updateTask(req, res) {
  res.send("update single task");
}

function deleteTask(req, res) {
  res.send("delete single task");
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
