const express = require('express');
const routes = express.Router();
const Tag = require('./../models/Tag');
const Note = require('./../controllers/NoteController');
const Notebooks = require('./../controllers/NoteBookController');


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

routes.get('/user/666',(req,res) =>{
    res.json(
        {
        "name": "Steven",
        "lastName": "Morrisey",
        "id": "666",
        "pictureUrl": "https://pbs.twimg.com/profile_images/547081189123563520/XS7Otwwu.jpeg"
        }
    );
});

routes.get('/notebooks',Notebooks.getAll);

routes.get('/tags',(req,res) =>{
    res.json(
    {
      "tags": [
        {
        "name": "song",
        "id": "1"
        },
        {
        "name": "important",
        "id": "2"
        },
        {
        "name": "story",
        "id": "3"
        },
        {
        "name": "cool",
        "id": "4"
        }
      ]
    }
    );
});


routes.get('/notes', Note.getAll);
routes.post('/notes', Note.add);
routes.put('/notes/:id', Note.update);

module.exports = routes;
