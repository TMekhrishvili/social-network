const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('db connected'))
    .catch(error => console.log(error))

app.use(cors())
app.use(expressValidator());
app.use(express.json());

// get
const getRoute = require('./routes/posts');
app.use('/', getRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port: ${PORT}`)
});
