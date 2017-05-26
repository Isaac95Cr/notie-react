const express = require('express');
const routes = express.Router();

routes.get('/',(req,res) =>{
    res.send("hello world");
});

routes.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
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

routes.get('/notebooks',(req,res) =>{
    res.json(
        {   
        "notebooks":[
            {
            "name": "songs",
            "id": "1"
            },
            {
            "name": "stories",
            "id": "2"
            },
            {
            "name": "personal",
            "id": "3",
            "deafult": true
            },
            {
            "name": "myths",
            "id": "4",
            "deafult": true
            },
            {
            "name": "weird stuff",
            "id": "5",
            "deafult": true
            },
            {
            "name": "cool stuff",
            "id": "6",
            "deafult": true
            },
            {
            "name": "me",
            "id": "7",
            "deafult": true
            }
        ]
        }
    );
});

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


routes.get('/notes',(req,res) =>{
    res.json(
    {
      "notes": [
            {
            "id": "1",
            "title": "This Charming Man",
            "text": "Punctured bicycle \n on a hillside desolate \n will Nature make a man of me yet? \n\n When in this charming \n this charming man \n\n Why pamper life's complexities \n when the leather runs smooth on the passenger seat? \n\n I would go out tonight \n but I haven't got a stitch to wear \n this man said \"It's gruesome that someone so handsome should care\" \n\n A jumped-up pantry boy \n who never knew his place \n he said \"return the rings\" \n he knows so much about these things \n he knows so much about these things \n\n I would go out tonight \n but I haven't got a stitch to wear \n this man said \"It's gruesome \n that someone so handsome should care\" \n\n This charming man\n this charming man \n\n A jumped-up pantry boy \n who never knew his place \n he said \"return the ring\" \n he knows so much about these things \n he knows so much about these things \n he knows so much about these things",
            "notebook": "1",
            "tags": [ "1", "2" ]
            },
            {
            "id": "2",
            "title": "Reminder: 1",
            "text": "Listen to new Slowdive's album!",
            "notebook": "3",
            "tags": [ "1" ]
            },
            {
            "id": "3",
            "title": "Morning love, are you ok?",
            "text": "I fucking hate you \n\nLove or lust. Nightmare of a summer dream, fishing in a puddle of mud to maybe find a peace of mind or, soothing company. Abandon at 6 am, leave no trace but only the taste of my lips in a lost mouth. Alone. \nEither ways the night calls and I fail to answer. Light beams shatter my eyes as the thin cloth of hope lingers inside my chest. A girl, she stares. My eyes blink once, twice, real, raw, flesh. Flood of blood to my bones, aches cease, I’m not ready. \nHer loving eyes pierce deep into my skin unveiling true wounds, yet the sense of awareness fades as my eyes blink for a third time. This time, she’s gone, for good I think, I’m not that sure now. Left no sign of life, no sign of interest. \nStill I persuade myself to embrace the sound while the indifference of their faces clashes into my ribs and tears me open. Everyone for himself, only the fittest will claim victory. So why Loneliness seeks to me between the multitude? Your face it is, solitude. \nI don’t belong here.",
            "notebook": "2",
            "tags": [ "3" ]
            },
            {
            "id": "4",
            "title": "Reminder: 2",
            "text": "I need to go pickup some flowers for my funeral, then take a break at the supermarket, I've got cupons you see.",
            "notebook": "3",
            "tags": [ "2", "4" ]
            },
            {
            "id": "5",
            "title": "Albums I want",
            "text": "Sway - Whirr \nLoveless - My Bloody Valentine \nOshin - DIIV \nClash The Truth - Beach Fossils \nSiempre Mar - 424 \nCity Lights - The Hills",
            "notebook": "3",
            "tags": [ "4", "3" ]
            }
        ]
    }
    );
});


module.exports = routes;
