const express = require('express');
const router = express.Router();
const controller = require('../controllers/documentItemController');
const controllerAreaAspect = require('../controllers/itemAreaAspectController');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.get('/items/:id', controller.getItems);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

router.get('/:id/aspects', controller.getAreasAspects);
router.post('/:id/aspects', controllerAreaAspect);
router.delete('/:id/aspects/:item_area_aspect_id', controllerAreaAspect.delete);

module.exports = router;