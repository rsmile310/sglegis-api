const { customers_groups } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(customers_groups, req, res, next);    
}

exports.getQuery = (req, res, next)=>{
    base.query(customers_groups, req, res, next);
}

exports.get = (req, res, next) => {
    base.get(customers_groups, req, res, next, 'customer_group_id');
};

exports.post = (req, res, next) => {
    base.insert(customers_groups, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(customers_groups, req, res, next, 'customer_group_id');
}

exports.delete = (req, res, next) => {
    base.delete(customers_groups, req, res, next, 'customer_group_id');
}

