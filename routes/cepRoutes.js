const express = require('express');
const router = express.Router();
const controller = require('../controllers/cepController');

router.get('/:id', controller.get);

module.exports = router;