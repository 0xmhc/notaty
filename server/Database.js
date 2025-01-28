const mongoose = require("mongoose");
const Note = require("./schemas/note");

class Database {
  constructor() {
    this.Url = "mongodb://localhost:27017/notaty";
  }
  connect() {
    mongoose
      .connect(this.Url, {})
      .then(() => console.log("Database connected successfully"))
      .catch((err) => console.log(`Error in connecting Database ${err}`));
  }
  addNote(note) {
    return new Promise((resolve, reject) => {
      note["createdDate"] = new Date();
      note["updatedDate"] = new Date();
      let newNote = new Note(note);
      newNote
        .save()
        .then((doc) => resolve(doc))
        .catch((err) => reject(err));
    });
  }
}

module.exports = Database;
