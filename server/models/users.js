const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Title is required',
    },
    lastname: {
        type: String,
        required: 'Body is required',
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    genderid: {
        type: Number,
        required: 'Body is required',
    }
})

module.exports = mongoose.model("users", userSchema)