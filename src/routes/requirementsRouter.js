const express = require('express');
const router = express.Router();
const controller = require('../controllers/requirementsController');

router.get('/:customerId', controller.getAll);

module.exports = router;