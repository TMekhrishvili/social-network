const express = require('express');
const app = express();

// get
const getRoute = require('./routes/getRoute');
app.use('/', getRoute);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port: ${PORT}`)
});