const { getposts, createPost } = require('../controllers/posts');
const express = require('express');

const router = express.Router();
router.get('/', getposts);
router.post('/post', createPost);

module.exports = router