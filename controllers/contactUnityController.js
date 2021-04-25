const { unities_contacts } = require('../models');
const base = require('./baseController');

exports.getAll = (req, res, next) => {
    base.getAll(unities_contacts, req, res, next);    
}

exports.get = (req, res, next) => {
    base.get(unities_contacts, req, res, next, 'unity_contact_id');
};

exports.post = (req, res, next) => {
    base.insert(unities_contacts, req, res, next);
}

exports.put = (req, res, next) => {
    base.update(unities_contacts, req, res, next, 'unity_contact_id');
}

exports.delete = (req, res, next) => {
    base.delete(unities_contacts, req, res, next, 'unity_contact_id');
}

