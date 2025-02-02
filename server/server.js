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
  db.getNotes()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});
app.get("/note/:id", (req, res) => {
  const { id } = req.params;
  db.getNoteById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("id Not Found ", id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send(err));
});
app.put("/notes", (req, res) => {
  db.updateNote(req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send("id Not Found ", id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send(err));
});
app.delete("/note/:id", (req, res) => {
  const { id } = req.params;
  db.deleteNote(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("id Not Found ", id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send(err));
});
const port = 3000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
  db.connect();
});
