const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController');

router.post('/', controller.post);
  //router.put('/:id', controller.put);
  //router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.get);


module.exports = router;