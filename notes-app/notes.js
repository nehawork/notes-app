const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.bold("Your notes:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const getNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.bold.blue(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.bold("Unable to find note!"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold("New note added!"));
  } else {
    console.log(chalk.red.bold("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.bold("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.bold("No note found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

module.exports = { listNotes, addNote, removeNote, getNote };
