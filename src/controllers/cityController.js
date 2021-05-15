const { cities } = require('../models');
const base = require('./baseController');
const options = require('./queryoptions');


exports.getAll = (req, res, next) => {    
    cities.findAll(options.getOptions(req, "state_id", parseInt(req.query.state_id) ))        
    .then(values => {
        res.send(values);
    })
    .catch(err => {
        next(err);
    });
}

exports.get = (req, res, next) => {
    base.get(cities, req, res, next, 'city_id');
};

