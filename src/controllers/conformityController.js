const conformity = require('../enuns/conformity');

exports.getAll = (req, res, next) => {
    res.send(conformity);
}
