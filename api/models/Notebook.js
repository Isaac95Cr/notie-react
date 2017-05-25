const mongoose = require("mongoose");

const NoteBookSchema = mongoose.Schema({
    id: String,
    name: String
});

const NoteBookModel = mongoose.model('NoteBook',NoteBookSchema);

module.exports = NoteBookModel; 