const express = require('express');
const router = express.Router();
const controller = require('../controllers/requirementsController');

router.get('/', controller.getAll);

module.exports = router;