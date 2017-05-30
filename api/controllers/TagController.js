const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');

const getAll = (req,res)=>{
    Tag.find().exec((err,data)=>{
        res.json(data);
    });
};

const add = (req,res)=>{
   const tag = new Tag(req.body);
   tag.save((err,data)=>{
       if(err){
           res.status("422");
           res.send(err);
       }
       res.status("201");
       res.json(req.body);
   });
};

const update = (req,res)=>{
    Tag.findById(req.params.id,(err, tag) => {
        if(err){
            console.log(err);
            res.status("404").send(err);
        }else{
            Object.assign(tag, req.body)
            tag.save((err, tag) => {
                if(err) {
                    res.status("500").send(err);
                }
                res.status("201");
                res.json(tag);
            })
        }
    });
};

const del = (req,res)=>{
    Tag.findById(req.params.id,(err, tag) => {
        if(err){
            console.log(err);
            res.status("404").send(err);
        }else{
            Object.assign(tag, req.body)
            tag.remove((err, tag) => {
                if(err) {
                    res.status("500").send(err);
                }
                res.status("200");
                res.send();
            })
        }
    });
};


const Tags = {
    getAll,
    add,
    update,
    del
};

module.exports = Tags;