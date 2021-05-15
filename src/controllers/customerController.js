const { customers } = require('../models');
const base = require('./baseController');
const db = require('../models/index');

exports.getAll = (req, res, next) => {
    //base.getAll(customers, req, res, next);  
    db.sequelize.query(`select c.*, cg.customer_group_name from customers c 
         join customers_groups cg on (c.customer_group_id = cg.customer_group_id)                
         order by c.customer_business_name`).then(values => {
        res.send(values[0]);
    });
}

exports.getQuery = (req, res, next)=>{
    base.query(customers, req, res, next);
}

exports.get = (req, res, next) => {
    base.get(customers, req, res, next, 'customer_id');
};

exports.post = (req, res, next) => {
    base.insert(customers, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(customers, req, res, next, 'customer_id');
}

exports.delete = (req, res, next) => {
    base.delete(customers, req, res, next, 'customer_id');
}

