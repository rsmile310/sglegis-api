const { documents } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(documents, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(documents, req, res, next, 'document_id');
};

exports.post = (req, res, next) => {
    base.insert(documents, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(documents, req, res, next, 'document_id');
}

exports.delete = (req, res, next) => {
    base.delete(documents, req, res, next, 'document_id');
}

