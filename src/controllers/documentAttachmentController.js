const { document_attachments } = require('../models');
const base = require('./baseController');



exports.getAll = (req, res, next) => {
    base.getAll(document_attachments, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(document_attachments, req, res, next, 'attachment_id');
};

exports.getAttachments = (req, res, next) => {
    base.get(document_attachments, req, res, next, 'document_id');
};

exports.post = (req, res, next) => {
    req.body.attachment_src = `${req.file.destination}/${req.file.filename}`;
    req.body.attachment_item_id = 0;
    base.insert(document_attachments, req, res, next);
}

exports.delete = (req, res, next) => {
    base.delete(document_attachments, req, res, next, 'attachment_id');
}

