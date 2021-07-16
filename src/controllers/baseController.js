const db = require('../models/index');
const sequelize = require('sequelize');
const options = require('./queryoptions');


exports.getAll = (model, req, res, next, populate = null) => {
    model.findAll(options.getOptions(req))
        .then(async (values) => {
            let resValues = values;
            if (populate !== null) {
                resValues = await getPopulate(resValues, populate[0]);
            }
            return res.send(resValues)
        })
        .catch(err => {
            next(err);
        });
};

exports.get = (model, req, res, next, fieldId) => {
    model.findAll(
        options.getOptions(req, fieldId, parseInt(req.params.id))
    )
        .then(values => {
            res.send(values);
        })
        .catch(err => {
            next(err);
        });
};

/** 
 * Pagination
 *  - offset: the page number
 *  - limit: records of pages
 * 
 * Order by
 *  - direction: asc or desc
 *  - orderby: field
 * 
 * Filters
 *  - fields: field to be filtered
 *  - ops: Operation to be done (eq - equal | )
 *  - value: value to be filtered on field
*/
exports.query = async (model, req, res, next, populate = null) => {
    let q = options.query(req);    
    try {
        let resData = await model.findAll(q);
        if (populate) {
            resData = await getPopulate(resData, populate[0]);
        }
        return res.send(resData);
    } catch (err) {
        next(err)
    }
    
}

/** 
 * Pagination
 *  - offset: the page number
 *  - limit: records of pages
 * 
 * Order by
 *  - direction: asc or desc
 *  - orderby: field
 * 
 * Filters
 *  - fields: field to be filtered
 *  - ops: Operation to be done (eq - equal | )
 *  - values: value to be filtered on field
*/
exports.rawquery = (query, req, res, next) => {
    let q = options.rawfilter(req);
    if (q) {
        query += q;
    }
    db.sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(values => {
            res.send(values);
        })
        .catch(err => {
            next(err);
        });
}

exports.insert = (model, req, res, next) => {
    model.create(req.body, { isNewRecord: true })
        .then(values => {
            res.send(values);
        })
        .catch(err => {
            next(err);
        });
}

exports.update = (model, req, res, next, fieldId) => {
    model.update(req.body, options.where(fieldId, req.params.id))
        .then(values => {
            res.send(values);
        })
        .catch(err => {
            next(err);
        });
}

exports.delete = (model, req, res, next, fieldId) => {
    model.destroy(options.where(fieldId, req.params.id))
        .then(values => {
            res.status(200).send();
        })
        .catch(err => {
            next(err);
        });
}

exports.deleteWithParam = (model, req, res, next, fieldId, value) => {
    model.destroy(options.where(fieldId, value))
        .then(values => {
            res.status(200).send();
        })
        .catch(err => {
            next(err);
        });
}

const getPopulate = (arrayValues, populate) => {
    const { as, model, referenceKey, referenceValue } = populate;
    return Promise.all(arrayValues.map(async (values) => {
        const popValue = await model.findOne({
            where: { [referenceKey]: values[referenceValue] }
        })
        values.dataValues[as] = popValue ? { ...popValue?.dataValues } : {};
        return {
            ...values.dataValues
        }
    }));
}