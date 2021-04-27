var createError = require('http-errors');

module.exports = (app) => {
    app.use(function (req, res, next) {
        next(createError(404));
    });
    
    // error handler
    app.use(function (err, req, res, next) {
        
        console.log(err);

        const errNumber = err.status || 500;

        res.status(errNumber);
        res.json({ status: 'error', number: errNumber, message: err.message });
    });
};