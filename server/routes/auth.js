const express = require('express');
const { signup } = require('../controllers/auth');
// const { createPostValidator } = require('../validation/index');

const router = express.Router();

router.post('/signup', signup);

module.exports = router