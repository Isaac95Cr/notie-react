const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config();
const app = express();

const port =  process.env.DB_PORT;
app.use('/api',routes);



app.listen(port,() => {
    console.log("app is running at port " + port);
});
