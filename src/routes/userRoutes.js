const express = require('express');
const router = express.Router();
const controller = require("../controllers/userController");

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/detail/:id', controller.get);
router.get('/query', controller.getQuery);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;