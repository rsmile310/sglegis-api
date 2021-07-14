const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require("../controllers/userController");
const verifyToken = require('../middleware/auth');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/detail/:id', controller.get);
router.get('/query', controller.getQuery);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.put('/reset-password/:id', controller.resetPassword);
router.post('/login', controller.login);
router.get('/current', verifyToken, controller.current);

module.exports = router;