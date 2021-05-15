const { document_items } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(document_items, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(document_items, req, res, next, 'document_item_id');
};

exports.getItems = (req, res, next) => {
    base.get(document_items, req, res, next, 'document_id');
};

exports.post = (req, res, next) => {
    base.insert(document_items, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(document_items, req, res, next, 'document_item_id');
}

exports.delete = (req, res, next) => {
    base.delete(document_items, req, res, next, 'document_item_id');
}

