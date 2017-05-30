const mongoose = require('mongoose');
const NoteBook = mongoose.model('NoteBook');
const { saveModel, removeModel, updateModel, sendJsonResponse, sendErrorResponse } = require('./../apiUtils');


const getAll = (req,res)=>{
    NoteBook.find().exec((err,data)=>{
        sendJsonResponse(res, data);
    });
};

const add = (req,res)=>{
   const noteBook = new NoteBook(req.body);
   saveModel(res, noteBook);
};

const update = (req,res)=>{
    const { params, body } = req;
    NoteBook.findById(params.id,(err, noteBook) => {
        err ? sendErrorResponse(res, err) : updateModel(res, noteBook, body);
    });  
};

const del = (req,res)=>{
    const { params, body } = req;
    NoteBook.findById(params.id,(err, noteBook) => {
        err ? sendErrorResponse(res, err) : removeModel(res,noteBook);
    });  
};

const NoteBooks = {
    getAll,
    add,
    update,
    del
};

module.exports = NoteBooks;