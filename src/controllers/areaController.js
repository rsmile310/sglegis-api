const { areas } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(areas, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(areas, req, res, next, 'area_id');
};

exports.post = (req, res, next) => {
    base.insert(areas, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(areas, req, res, next, 'area_id');
}

exports.delete = (req, res, next) => {
    base.delete(areas, req, res, next, 'area_id');
}
