const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("hello world");
});

app.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
});

app.listen(3000,() => {
    console.log("app is running at port 3000");
});
