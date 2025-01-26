const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const notes = [];

app.post("/notes", (req, res) => {
  const data = req.body;
  console.log(`Body: ${data}`);
  notes.push(data.title);
  res.send(true);
  console.log(notes);
});
app.get("/notes", (req, res) => {
  res.send(notes);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
