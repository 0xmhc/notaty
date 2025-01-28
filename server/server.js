const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const Database = require("./Database");
const db = new Database();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/notes", (req, res) => {
  const data = req.body;
  db.addNote(data)
    .then((doc) => res.send(doc))
    .catch((err) => res.status(500).send(err));
});
app.get("/notes", (req, res) => {
  res.send(notes);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
  db.connect();
});
