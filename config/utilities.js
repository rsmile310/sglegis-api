const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(cors());
    app.use(logger('dev'));
    app.disable('x-powered-by');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
};