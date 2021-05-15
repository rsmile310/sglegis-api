const { items_areas_aspects } = require('../models');
const base = require('./baseController');

exports.post = (req, res, next) => {
    base.insert(items_areas_aspects, req, res, next);
}

exports.delete = (req, res, next) => {
    base.deleteWithParam(items_areas_aspects, req, res, next, 'item_area_aspect_id', req.params.item_area_aspect_id);
}