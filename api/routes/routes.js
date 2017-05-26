const express = require('express');
const routes = express.Router();
const Tag = require('./../models/Tag');

routes.get('/',(req,res) =>{
    res.send("hello world");
});

routes.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
});

routes.get('/mongo', (req, res) => {
  Tag.find({}, (err, doc) => {
    res.json(doc);
  });
});

module.exports = routes;
