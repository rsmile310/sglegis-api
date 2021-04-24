const { menus } = require('../models');
const options = require('./queryoptions')

exports.post = (req, res, next) => {
    res.status(201).send('post');
};

exports.getAll = (req, res, next) => {
    menus.findAll(options.getOptions(req)).then(values => {
        res.send(values);
    });
};


exports.get = (req, res, next) => {
    menus.findAll(
        {
            where: {menu_id : req.params.id}
        }
    ).then(values => {
        res.send(values);
    });
};




