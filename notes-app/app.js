const yargs = require("yargs");

const { listNotes, addNote, removeNote, getNote } = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    addNote(args.title, args.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    removeNote(args.title);
  },
});

yargs.command({
  command: "list",
  describe: "List of notes",
  handler() {
    listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    getNote(args.title);
  },
});

yargs.parse();
