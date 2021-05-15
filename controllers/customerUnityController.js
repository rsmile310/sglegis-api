const { customers_unities, unities_contacts } = require('../models');
const base = require('./baseController');
const db = require('../models/index');
const options = require('./queryoptions');
const sequelize = require('sequelize');

exports.getAll = (req, res, next) => {
    db.sequelize.query(`select * 
    from customers_unities u 
    join unities_contacts c on (u.customer_unity_id = c.unity_contact_customer_unity_id)
    join customers cs on (cs.customer_id = u.customer_id)
    join customers_groups cg on (cg.customer_group_id = cs.customer_group_id)    
    order by u.customer_unity_name asc`).then(values => {
        res.send(values[0]);
    });
}

exports.getAreasAspects = (req, res, next) => {
    let sql = `select ap.*, ar.area_name, uaa.unity_area_aspect_id
                from areas_aspects ap
                join areas ar on (ap.area_id = ar.area_id)
                left join unities_areas_aspects uaa on (uaa.area_id = ar.area_id and uaa.area_aspect_id = ap.area_aspect_id)
                where (uaa.customer_unity_id = ${req.params.id} or uaa.customer_unity_id is null)
               order by ar.area_id `;

    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        let obj = new Object();
        let areas = [];
        let areas_id = [];
        for (let i = 0; i < values.length; i++) {
            if (!areas_id.includes(values[i].area_id)) {
                areas_id.push(values[i].area_id);
                areas.push({ "area_id": values[i].area_id, "area_name": values[i].area_name, "aspects": [] });
            }
        }

        for (let j = 0; j < areas.length; j++) {
            for (let k = 0; k < values.length; k++) {
                if (values[k].area_id == areas[j].area_id) {
                    areas[j].aspects.push(
                        {
                            "area_aspect_id": values[k].area_aspect_id,
                            "area_aspect_name": values[k].area_aspect_name,
                            "checked": (values[k].unity_area_aspect_id) ? "S" : "N",
                            "previous": (values[k].unity_area_aspect_id) ? "S" : "N"
                        });
                }
            }
        }
        res.send(areas);
    });
}

exports.get = (req, res, next) => {
    base.get(customers_unities, req, res, next, 'customer_unity_id');
};

exports.getAspects = (req, res, next) => {
    let sql = `select *
    from areas_aspects ap
    join areas ar on (ap.area_id = ar.area_id)
    left join unities_areas_aspects uaa on (uaa.area_id = ar.area_id and uaa.area_aspect_id = ap.area_aspect_id)
    where (uaa.customer_unity_id = ${req.params.id} or uaa.customer_unity_id is null)
    order by ar.area_name, ap.area_aspect_name`;
    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        let ret = [];
        let area_name = "";
        let obj;
        for (let i = 0; i < values.length; i++) {
            if (area_name != values[i].area_name) {
                if (area_name != "") {
                    ret.push(obj);
                }
                area_name = values[i].area_name;
                obj = new Object();
                obj.area_name = values[i].area_name;
                obj.area_id = values[i].area_id;
                obj.aspects = [];
            }
            obj.aspects.push({
                "area_aspect_id": values[i].area_aspect_id,
                "area_aspect_name": values[i].area_aspect_name,
                "customer_unity_id": values[i].customer_unity_id
            });
        }
        res.send(ret);
    });

}

exports.post = (req, res, next) => {
    //fazer insert da unidade
    let u = customers_unities.create(req.body, { isNewRecord: true })
        .then(values => {
            //agora insert da unitycontact                
            req.body.unity_contact_customer_unity_id = values.customer_unity_id;
            base.insert(unities_contacts, req, res, next);

        })
        .catch(err => {
            next(err);
        });

}

exports.put = (req, res, next) => {
    base.update(customers_unities, req, res, next, 'customer_unity_id');
}

exports.delete = (req, res, next) => {
    base.delete(customers_unities, req, res, next, 'customer_unity_id');
}



