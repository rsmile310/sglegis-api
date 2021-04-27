const utilitiesConfig = require('./config/utilities');
const routesConfig = require('./config/routes');
const errorConfig = require('./config/error');
//const databaseConfig = require('./config/database');

const express = require('express');

const app = express();

databaseConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;

