const mongoose = require('mongoose');
const NoteBook = mongoose.model('NoteBook');

const getAll = (req,res)=>{
    NoteBook.find().exec((err,data)=>{
        res.json(data);
    });
};

const add = (req,res)=>{
   const noteBook = new NoteBook(req.body);
   noteBook.save((err,noteBook)=>{
       if(err){
           res.status("422");
           res.send(err);
       }
       res.status("201");
       res.json(req.body);
   });
};

const update = (req,res)=>{
    NoteBook.findById(req.params.id,(err, noteBook) => {
        if(err){
            console.log(err);
            res.status("404").send(err);
        }else{
            Object.assign(noteBook, req.body)
            noteBook.save((err, noteBook) => {
                if(err) {
                    res.status("500").send(err);
                }
                res.status("201");
                res.json(noteBook);
            })
        }
    });  
};

const del = (req,res)=>{
    NoteBook.findById(req.params.id,(err, noteBook) => {
        if(err){
            console.log(err);
            res.status("404").send(err);
        }else{
            Object.assign(noteBook, req.body)
            noteBook.remove((err, noteBook) => {
                if(err) {
                    res.status("500").send(err);
                }
                res.status("200");
                res.send();
            })
        }
    });  
};

const NoteBooks = {
    getAll,
    add,
    update,
    del
};

module.exports = NoteBooks;