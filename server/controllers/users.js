const Users = require('../models/users');

const getUsers = (req, res) => {
    Users.find()
        .then(users => {
            res.json({ users })
        })
        .catch(error => console.log(error));
}

module.exports = {
    getUsers
}