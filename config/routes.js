//const mid = require('../middlewares/AuthHandle');

const routes = require('../routes');

module.exports = (app) => {

    app.use('/api/', routes);
};
