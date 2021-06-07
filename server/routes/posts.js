const express = require('express');
const { getPosts, createPost } = require('../controllers/posts');
const { createPostValidator } = require('../validation/index');

const router = express.Router();
router.get('/', getPosts);
router.post('/add', createPostValidator, createPost);

module.exports = router