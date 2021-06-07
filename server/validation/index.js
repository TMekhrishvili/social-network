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

module.exports = {
    createPostValidator
}