const { getController } = require('../controllers/getController');
const express = require('express');

const router = express.Router();
router.get('/', getController);

module.exports = router