const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const signup = async (req, res) => {
    // check if user exists
    const email = req.body.email;
    const userExists = await Users.findOne({ email });
    if (userExists) return res.status(403).json({ error: 'Email is taken.' });
    // sign up
    const user = new Users(req.body);
    await user.save();
    res.json({
        message: "success",
        user_id: user._id
    });
}

const signin = (req, res) => {
    const { email, password } = req.body;
    Users.findOne({ email }, (error, user) => {
        if (error || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!user.authenticate(password)) {
            return res.status(401).json({ message: 'Password is incorrect.' });
        }
    })
}

module.exports = {
    signup,
    signin
}