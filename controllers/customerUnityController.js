const { customers_unities, unities_contacts } = require('../models');
const base = require('./baseController');
const db = require('../models/index');

exports.getAll = (req, res, next) => {
    //base.getAll(customers_unities, req, res, next);
    db.sequelize.query(`select * 
    from customers_unities u 
    join unities_contacts c on (u.customer_unity_id = c.unity_contact_customer_unity_id)
    join customers cs on (cs.customer_id = u.customer_id)
    join customers_groups cg on (cg.customer_group_id = cs.customer_group_id)    
    order by u.customer_unity_name asc`).then(values => {
        res.send(values[0]);
    });
}

exports.get = (req, res, next) => {
    base.get(customers_unities, req, res, next, 'customer_unity_id');
};

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

