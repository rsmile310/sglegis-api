options = require('./queryoptions');

exports.getAll = (model, req, res, next) => {
    model.findAll(options.getOptions(req)).then(values => {
        res.send(values);
    });
};

exports.get = (model, req, res, next, fieldId) => {
    model.findAll(
        options.getOptions(req, fieldId, parseInt(req.params.id))
    ).then(values => {
        res.send(values);
    });
};

exports.insert = (model, req, res, next) => {
    model.create(req.body, { isNewRecord: true }).then(values => {
        res.send(values);
    });
}

exports.update = (model, req, res, next, fieldId) => {
    model.update(req.body, options.where(fieldId, req.params.id)).then(values => {
        res.send(values);
    });
}

exports.delete = (model, req, res, next, fieldId) => {
    model.destroy(options.where(fieldId, req.params.id)).then(values => {
        res.status(200).send();
    });
}
