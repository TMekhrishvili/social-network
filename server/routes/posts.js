const { getPosts, createPost } = require('../controllers/posts');
const express = require('express');
const { createPostValidator } = require('../validation/index');

const router = express.Router();
router.get('/', getPosts);
router.post('/post', createPostValidator, createPost);

module.exports = router