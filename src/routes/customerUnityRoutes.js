const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerUnityController');
const controllerAreaAspect = require('../controllers/unityAreaAspectController');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.get('/query', controller.getQuery);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/:id/aspects', controller.getAreasAspects);

router.post('/:id/aspects', controllerAreaAspect.post)
router.delete('/:id/aspects/:unity_area_aspect_id', controllerAreaAspect.delete)

module.exports = router;