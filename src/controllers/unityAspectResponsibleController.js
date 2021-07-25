const db = require('../models');
const { unities_aspects_responsibles } = require('../models');
const base = require('./baseController');
const sequelize = require('sequelize');

exports.get = async (req, res, next) => {
    const sql = `select *
    from unities_aspects_responsibles ur
    join responsibles_aspects ra on (ra.unity_aspect_responsible_id = ur.unity_aspect_responsible_id)
    join areas_aspects aspects on (aspects.area_aspect_id = ra.area_aspect_id)
    where ur.customer_unity_id = ${req.params.id}
    order by ur.unity_aspect_responsible_name asc`;
    
    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        console.log(values[0]);
        let newValues = [];
        for (let i = 0; i < values.length; i++) {
            if (newValues.find(nv => nv.unity_aspect_responsible_id === values[i].unity_aspect_responsible_id)) {
                newValues.find(nv => nv.unity_aspect_responsible_id === values[i].unity_aspect_responsible_id).aspects.push({
                    area_aspect_id: values[i].area_aspect_id,
                    area_aspect_name: values[i].area_aspect_name,
                })
            } else {
                newValues.push({
                    unity_aspect_responsible_id: values[i].unity_aspect_responsible_id,
                    unity_aspect_responsible_name: values[i].unity_aspect_responsible_name,
                    unity_aspect_responsible_email: values[i].unity_aspect_responsible_email,                    
                    aspects: [{
                        area_aspect_id: values[i].area_aspect_id,
                        area_aspect_name: values[i].area_aspect_name,
                    }]
                })
            }
        }
        res.send(newValues);
    });
}

exports.post = (req, res, next) => {
    base.insert(unities_aspects_responsibles, req, res, next);
}

exports.delete = async (req, res, next) => {
    try {
        await db.sequelize.query(`delete from unities_aspects_responsibles where (unity_aspect_responsible_id = ${req.params.id})`);
        await db.sequelize.query(`delete from responsibles_aspects where (unity_aspect_responsible_id = ${req.params.id})`);
        res.status(200).send();
    } catch (error) {
        next(error);        
    }
}
