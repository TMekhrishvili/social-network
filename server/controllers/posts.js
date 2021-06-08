const Posts = require('../models/posts');

const getPosts = (req, res) => {
    Posts.find()
        .select('_id title body')
        .then(posts => {
            res.json({ posts })
        })
        .catch(error => console.log(error));
}

const createPost = (req, res) => {
    const post = new Posts(req.body);
    post.save()
        .then(result => {
            res.json({ result });
        });
}

module.exports = {
    getPosts,
    createPost
}