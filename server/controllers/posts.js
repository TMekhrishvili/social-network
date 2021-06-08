const Posts = require('../models/posts');

const getPosts = (req, res) => {
    Posts.find()
        .select('_id title body')
        .then(posts => {
            res.json({ posts })
        })
        .catch(error => console.log(error));
}

const createPost = async (req, res) => {
    const post = new Posts(req.body);
    await post.save();
    res.json({ post });
}

module.exports = {
    getPosts,
    createPost
}