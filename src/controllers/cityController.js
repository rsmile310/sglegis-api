const { cities } = require('../models');
const base = require('./baseController');


exports.getAll = (req, res, next) => {
    base.getAll(cities, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(cities, req, res, next, 'city_id');
};

