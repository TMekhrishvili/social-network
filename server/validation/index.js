const createPostValidator = (req, res, next) => {

    // title
    req.check('title', 'Title is required').notEmpty();
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
        min: 4, max: 150
    });

    // body
    req.check('body', 'Body is required').notEmpty();
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min: 4, max: 150
    });

    //check for errors
    const errors = req.validationErrors();
    if (errors) {
        const error = errors.map(err => err.msg)[0];
        return res.status(400).json({ error });
    }
    next();
}

const userSignupValidator = (req, res, next) => {

    // username
    req.check('username', 'Username is required').notEmpty();

    // email
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Incorrect email format.').isEmail();

    // password
    req.check('password', 'Password is required').notEmpty();

    //check for errors
    const errors = req.validationErrors();
    if (errors) {
        const error = errors.map(err => err.msg)[0];
        return res.status(400).json({ error });
    }
    next();
}

module.exports = {
    createPostValidator,
    userSignupValidator
}