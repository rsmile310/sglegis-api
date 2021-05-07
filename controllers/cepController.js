const { ceps } = require('../models');
const base = require('./baseController');

exports.get = (req, res, next) => {
    base.get(ceps, req, res, next, 'cep');
}
