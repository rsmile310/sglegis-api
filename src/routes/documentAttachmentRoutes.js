const express = require('express');
const router = express.Router();
const controller = require('../controllers/documentAttachmentController');
const file = require('../middleware/file');

file.setFolder('documents');

router.post('/', file.fileUploader.single('attachment_file'),  controller.post);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.get('/attachments/:id', controller.getAttachments);
router.delete('/:id', controller.delete);

module.exports = router;