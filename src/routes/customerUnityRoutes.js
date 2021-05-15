const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerUnityController');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.get('/:id/aspects', controller.getAspects);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;