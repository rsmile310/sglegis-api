const { actionplans } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(actionplans, req, res, next);    
}

exports.getQuery = (req, res, next)=>{
    base.query(actionplans, req, res, next);
}

exports.get = (req, res, next) => {
    base.get(actionplans, req, res, next, 'actionplan_id');
};

exports.post = (req, res, next) => {
    base.insert(actionplans, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(actionplans, req, res, next, 'actionplan_id');
}

exports.delete = (req, res, next) => {
    base.delete(actionplans, req, res, next, 'actionplan_id');
}

