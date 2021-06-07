const { getposts, createPost } = require('../controllers/posts');
const express = require('express');
const { createPostValidator } = require('../validation/index');

const router = express.Router();
router.get('/', getposts);
router.post('/post', createPostValidator, createPost);

module.exports = router