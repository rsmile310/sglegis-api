const db = require('../models');
const { unities_areas_aspects } = require('../models');
const base = require('./baseController');

exports.get = async (req, res, next) => {
    const values = await db.sequelize.query(`select *
    from unities_areas_aspects ua
    join areas_aspects on (ua.area_aspect_id = areas_aspects.area_aspect_id)
    where (ua.customer_unity_id = ${req.params.id})
    order by areas_aspects.area_aspect_name asc
    `);
    res.send(values[0]);
}

exports.post = (req, res, next) => {
    base.insert(unities_areas_aspects, req, res, next);
}

exports.delete = (req, res, next) => {
    base.deleteWithParam(unities_areas_aspects, req, res, next, 'unity_area_aspect_id', req.params.unity_area_aspect_id);
}
