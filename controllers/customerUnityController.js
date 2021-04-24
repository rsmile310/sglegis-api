const { customers_unities } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(customers_unities, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(customers_unities, req, res, next, 'customer_unity_id');
};

exports.post = (req, res, next) => {
    base.insert(customers_unities, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(customers_unities, req, res, next, 'customer_unity_id');
}

exports.delete = (req, res, next) => {
    base.delete(customers_unities, req, res, next, 'customer_unity_id');
}

