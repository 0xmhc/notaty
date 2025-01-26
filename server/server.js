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
  console.log(`Body: ${body}`);
  notes.push(data.title);
  res.send(true);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
