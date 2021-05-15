const { document_status } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(document_status, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(document_status, req, res, next, 'document_status_id');
};

exports.post = (req, res, next) => {
    base.insert(document_status, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(document_status, req, res, next, 'document_status_id');
}

exports.delete = (req, res, next) => {
    base.delete(document_status, req, res, next, 'document_status_id');
}

