const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');

// env
const dotenv = require('dotenv');
dotenv.config();

// database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('db connected'))
    .catch(error => console.log(error))

// middlewares
app.use(cors())
app.use(expressValidator());
app.use(express.json());

// routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port: ${PORT}`)
});
