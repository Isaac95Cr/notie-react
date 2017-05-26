const mongoose = require('mongoose');
const Note = mongoose.model('Note');

getAll = (req, res) => {
    Note.find().exec((err,data)=>{
        res.json(data);
    });
} 

add = (req, res) => {
    const newNote = new Note(req.body);
    newNote.save((err, data)=>{
        if(err){
            res.status("422");
            res.send(err);
        }
        res.status("201");
        res.json(req.body);    
    }
    ); 
    
}

const Notes = {
    getAll,
    add
}

module.exports = Notes;