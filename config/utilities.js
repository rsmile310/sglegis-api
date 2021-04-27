const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(cors());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.disable('x-powered-by');

};