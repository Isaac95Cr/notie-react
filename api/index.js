require('dotenv').config();
require('./models/Note');
require('./models/Notebook');
require('./models/Tag');

const express = require('express');
const routes = require('./routes/routes');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const port =  process.env.DB_PORT;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',routes);

db(process.env.DB_CONNECTION_STRING);

app.listen(port,() => {
    console.log("app is running at port " + port);
});
