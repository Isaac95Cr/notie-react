const mongoose = require('mongoose');
const Note = mongoose.model('Note');

const getAll = (req, res) => {
    Note.find().exec((err,data)=>{
        res.json(data);
    });
}

const add = (req, res) => {
    const newNote = new Note(req.body);
    newNote.save((err, data)=>{
        if(err){
            res.status("422");
            res.send(err);
        }
        res.status("201");
        res.json(req.body);
    });
}

const update = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if(err) {
      console.log(err);
      res.status("404").send(err);
    } else {
      Object.assign(note, req.body)
      note.save((err, note) => {
        if(err) {
          res.status("500").send(err)
        }
        res.status("201")
        res.json(note)
      })
    }
  })
}

const Notes = {
    getAll,
    add,
    update
}

module.exports = Notes;
