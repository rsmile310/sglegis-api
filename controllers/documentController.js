const { document } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(document, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(document, req, res, next, 'document_id');
};

exports.post = (req, res, next) => {
    base.insert(document, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(document, req, res, next, 'document_id');
}

exports.delete = (req, res, next) => {
    base.delete(document, req, res, next, 'document_id');
}

