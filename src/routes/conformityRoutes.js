const express = require('express');
const router = express.Router();
const controller = require('../controllers/conformityController');

router.get('/', controller.getAll);

module.exports = router;