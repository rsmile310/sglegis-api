const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');
const { cities } = require('../models');


router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/query', controller.getQuery);
router.get('/:id', controller.get);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;