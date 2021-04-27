const mid = require('../middlewares/AuthHandle');



module.exports = (app) => {

    app.use('/api/', require('./routes'));
};
