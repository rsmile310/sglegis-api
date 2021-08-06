const express = require('express');
const router = express.Router();
const controller = require('../controllers/auditController');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/query', controller.getQuery);
router.post('/responsibles/notify', controller.notifyResponsibles);
router.get('/historicals', controller.getHistoricals);

module.exports = router;