//const mid = require('../middlewares/AuthHandle');
const path = require('path');
const routes = require('../routes');

module.exports = (app) => {


    app.use('/api/', routes);
};
