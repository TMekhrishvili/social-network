const Users = require('../models/users');

const signup = async (req, res) => {
    // check if user exists
    const email = req.body.email;
    const userExists = await Users.findOne({ email });
    if (userExists) return res.status(403).json({ error: 'Email is taken.' });

    // add new user
    const user = new Users(req.body);
    await user.save();
    res.json({ user });
}

module.exports = { signup }