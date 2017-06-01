const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const { saveModel, removeModel, updateModel, sendJsonResponse, sendErrorResponse } = require('./../apiUtils');

const getAll = (req, res) => {
  Note.find().exec((err,data)=>{
      sendJsonResponse(res, data);
  });
}

const add = (req, res) => {
  const newNote = new Note(req.body);
  saveModel(res, newNote);
}

const update = (req, res) => {
  const { params, body } = req;
  Note.findById(
    params.id,
    (err, note) => err ? sendErrorResponse(res, err) : updateModel(res, note, body)
  )
}

const del = (req,res)=>{
    const { params, body } = req;
    Note.findById(params.id,(err, note) => {
        err ? sendErrorResponse(res, err) : removeModel(res,note);
    });  
};

const Notes = {
    getAll,
    add,
    update,
    del
}

module.exports = Notes;
