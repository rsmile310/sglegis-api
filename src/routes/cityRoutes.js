const express = require('express');
const router = express.Router();
const controller = require('../controllers/cityController');
const { cities } = require('../models');


//router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);


module.exports = router;