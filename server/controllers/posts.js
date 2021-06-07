const Posts = require('../models/posts');

const getposts = (req, res) => {
    res.json({
        posts: [
            {
                title: "title",
                body: "body"
            }
        ]
    });
}

const createPost = (req, res) => {
    const post = new Posts(req.body);
    post.save().then(result => {
        res.status(200).json({ result });
    });
}

module.exports = {
    getposts,
    createPost
}