const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config();
const app = express();

const port =  process.env.DB_PORT;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
    next();
});

app.use('/api',routes);



app.listen(port,() => {
    console.log("app is running at port " + port);
});
