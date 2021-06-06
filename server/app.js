const express = require('express');
const app = express();

// get
const { getRoutes } = require('./routes/getRoutes');
app.get('/', getRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port: ${PORT}`)
});