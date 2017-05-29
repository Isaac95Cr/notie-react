const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  id: String,
  title: String,
  text: String,
  notebook: {
    type: String,
    required: true
  },
  tags: Array
});

const NoteModel = mongoose.model('Note', NoteSchema);

module.exports = NoteModel;
