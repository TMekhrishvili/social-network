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

module.exports = { signup }