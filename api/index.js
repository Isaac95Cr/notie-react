const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.use('/api',routes);

app.listen(3000,() => {
    console.log("app is running at port 3000");
});
