const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/hello", (req, res) => {
  res.send("<h1>Task Manager App</h1>");
});

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
