const express = require('express');
const router = express.Router();
const controller = require('../controllers/documentItemController');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.get('/items/:id', controller.getItems);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;