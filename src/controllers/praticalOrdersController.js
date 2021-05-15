const pratical_orders = require('../enuns/pratical_orders');

exports.getAll = (req, res, next) => {
    res.send(pratical_orders);
}
