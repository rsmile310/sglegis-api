const { responsibles_aspects } = require('../models');
const base = require('./baseController');

exports.post = (req, res, next) => {
    base.insert(responsibles_aspects, req, res, next);
}

