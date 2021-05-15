const { areas_aspects, areas } = require('../models');
const base = require('./baseController');
const db = require('../models/index');
const sequelize = require('sequelize');

exports.getAll = (req, res, next) => {
    //base.getAll(areas_aspects, req, res, next);    
    //areas_aspects.findAll({include: areas})
    let sql = `select ap.*, ar.area_name
    from areas_aspects ap
    join areas ar on (ap.area_id = ar.area_id)
    order by ap.area_aspect_name `;
    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        res.send(values);
    });      
}

exports.get = (req, res, next) => {
    base.get(areas_aspects, req, res, next, 'area_aspect_id');
};

exports.post = (req, res, next) => {
    base.insert(areas_aspects, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(areas_aspects, req, res, next, 'area_aspect_id');
}

exports.delete = (req, res, next) => {
    base.delete(areas_aspects, req, res, next, 'area_aspect_id');
}
