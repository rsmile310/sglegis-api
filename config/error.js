var createError = require('http-errors');

const genericError = (err, req, res, next) => {
    console.log(err);

    const errNumber = err.status || 500;

    res.status(errNumber);
    res.json({ status: 'error', number: errNumber, message: err.message });
};

const notFoundError = (req, res, next) => {
    next(createError(404));
};

const error = (app) => {
    app.use(notFoundError);
    app.use(genericError);
};

module.exports = error, genericError;