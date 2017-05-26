require('dotenv').config();

const express = require('express');
const routes = require('./routes/routes');
const app = express();
const db = require('./db');
const port =  process.env.DB_PORT;

db(process.env.DB_CONNECTION_STRING);

app.use('/api',routes);
app.listen(port,() => {
    console.log("app is running at port " + port);
});
