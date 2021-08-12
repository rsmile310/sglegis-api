const express = require('express');
const router = express.Router();
const controller = require('../controllers/actionplanController');

router.post('/', controller.post);
router.get('/', controller.getQuery);


module.exports = router;