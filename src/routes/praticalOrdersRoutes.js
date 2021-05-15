const express = require('express');
const router = express.Router();
const controller = require('../controllers/praticalOrdersController');

router.get('/', controller.getAll);

module.exports = router;