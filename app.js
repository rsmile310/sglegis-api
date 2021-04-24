const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', require('./src/routes'));

module.exports = app;

