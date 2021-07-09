const { users } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(users, req, res, next);    
}

exports.getQuery = (req, res, next)=>{
    base.query(users, req, res, next);
}

exports.get = (req, res, next) => {
    base.get(users, req, res, next, 'user_id');
};

exports.post = (req, res, next) => {
    base.insert(users, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(users, req, res, next, 'user_id');
}

exports.delete = (req, res, next) => {
    base.delete(users, req, res, next, 'user_id');
}

