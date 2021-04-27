const utilitiesConfig = require('./config/utilities');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database');
const errorConfig = require('./config/error');

const express = require('express');

const app = express();

databaseConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

/*app.use('/api/', require('./routes'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

*/

module.exports = app;

