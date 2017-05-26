const mongoose = require("mongoose");

const NoteBookSchema = mongoose.Schema({
    id: String,
    name: String
});

const NoteBookModel = mongoose.model('Notebook',NoteBookSchema);

module.exports = NoteBookModel;
