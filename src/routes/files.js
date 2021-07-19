const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const controller = require('')

router.post('/', controller.post);


module.exports = router;