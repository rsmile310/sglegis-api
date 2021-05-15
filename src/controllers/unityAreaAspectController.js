const { unities_areas_aspects } = require('../models');
const base = require('./baseController');

exports.post = (req, res, next) => {
    base.insert(unities_areas_aspects, req, res, next);
}

exports.delete = (req, res, next) => {
    base.deleteWithParam(unities_areas_aspects, req, res, next, 'unity_area_aspect_id', req.params.unity_area_aspect_id);
}
