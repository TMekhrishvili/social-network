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
    post.save((error, result) => {
        if (error) {
            return res.status(400).json({
                error
            })
        }
        res.status(200).json({
            result
        })
    })
    console.log('Created post: ', req.body);
}

module.exports = {
    getposts,
    createPost
}