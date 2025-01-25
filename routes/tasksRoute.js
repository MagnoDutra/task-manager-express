const express = require("express");
const { getAllTasks } = require("../controllers/tasksController");

const router = express.Router();

router.route("/").get(getAllTasks).post();

router.route("/:id").patch().delete();

module.exports = router;
