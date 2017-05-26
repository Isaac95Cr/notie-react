require('dotenv').config();

const express = require('express');
const routes = require('./routes/routes');
const app = express();
const db = require('./db');
const port =  process.env.DB_PORT;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
    next();
});

app.use('/api',routes);

db(process.env.DB_CONNECTION_STRING);

app.use('/api',routes);
app.listen(port,() => {
    console.log("app is running at port " + port);
});
