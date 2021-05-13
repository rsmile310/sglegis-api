//const mid = require('../middlewares/AuthHandle');
const path = require('path');
const routes = require('../routes');

module.exports = (app) => {

    app.use('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'))
    });

    app.use('/api/', routes);
};
