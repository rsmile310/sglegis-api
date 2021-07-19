const utilitiesConfig = require('./config/utilities');
const routesConfig = require('./config/routes');
const errorConfig = require('./config/error');
const passport = require('passport');
//const databaseConfig = require('./config/database');

const express = require('express');

const app = express();
app.use(passport.initialize());
//databaseConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;

