const { document_scopes } = require('../models');
const document_scopes = require('../models/document_scopes');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(document_scopes, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(document_scopes, req, res, next, 'document_scope_id');
};

exports.post = (req, res, next) => {
    base.insert(document_scopes, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(document_scopes, req, res, next, 'document_scope_id');
}

exports.delete = (req, res, next) => {
    base.delete(document_scopes, req, res, next, 'document_scope_id');
}

