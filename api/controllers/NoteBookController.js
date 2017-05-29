const mongoose = require('mongoose');
const NoteBook = mongoose.model('NoteBook');

const getAll = (req,res)=>{
    NoteBook.find().exec((err,data)=>{
        res.json(data);
    });
};

const NoteBooks = {
    getAll
};

module.exports = NoteBooks;