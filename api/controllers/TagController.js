const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');
const { saveModel, removeModel, updateModel, sendJsonResponse, sendErrorResponse } = require('./../apiUtils');


const getAll = (req,res)=>{
    Tag.find().exec((err,data)=>{
        sendJsonResponse(res, data);
    });
};

const add = (req,res)=>{
   const tag = new Tag(req.body);
    saveModel(res, tag);
};

const update = (req,res)=>{
    const { params, body } = req;
    Tag.findById(params.id,(err, tag) => {
        err ? sendErrorResponse(res, err) : updateModel(res, tag, body)
    })
};

const del = (req,res)=>{
    const { params, body } = req;
    Tag.findById(params.id,(err, tag) => {
        err ? sendErrorResponse(res, err) : removeModel(res, tag, body);
    });
};


const Tags = {
    getAll,
    add,
    update,
    del
};

module.exports = Tags;