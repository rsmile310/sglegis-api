const { states } = require('../models');
const base = require('./baseController');


exports.getAll = (req, res, next) => {
    base.getAll(states, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(states, req, res, next, 'state_id');
};

