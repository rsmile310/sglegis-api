const { Op } = require("sequelize");


exports.getOptions = (req, key, value) => {
    let r = new Object();

    if (req.query.limit == undefined || req.query.offset == undefined) {
        r.limit = undefined;
        r.offset = undefined
    } else {
        r.limit = parseInt(req.query.limit);
        r.offset = (parseInt(req.query.offset)-1) * parseInt(req.query.limit);
    }

    if (req.query.orderby == undefined || req.query.direction == undefined) {
        r.order = undefined
    } else {
        r.order = [[req.query.orderby, req.query.direction]];
    }

    if (key != undefined && value != undefined) {
        let where = new Object();
        where[key] = value;
        r.where = where;
    }
        
    return r;
}

function orderby(req, where) {
    if (req.query.orderby == undefined || req.query.direction == undefined) {
        where.order = undefined
    } else {
        where.order = [[req.query.orderby, req.query.direction]];
    }
    return where;    
}

function pagination(req, where) {
    if (req.query.limit == undefined || req.query.offset == undefined) {
        where.limit = undefined;
        where.offset = undefined
    } else {
        where.limit = parseInt(req.query.limit);
        where.offset = (parseInt(req.query.offset)-1) * parseInt(req.query.limit);
    }
    return where;    
}

exports.query = (req) => {
    if (req.query.fields != undefined) {
        let q = new Object();
        if (Array.isArray(req.query.fields)) {
            for (let x = 0; x < req.query.fields.length; x++){
                switch (req.query.ops[x]) {
                    case 'eq':
                        if (req.query.types[x] == 'i') {
                            q[req.query.fields[x]] = req.query.values[x];                            
                        } else {
                            q[req.query.fields[x]] = req.query.values[x];
                        }                        
                        break;
                    case 'like':
                        break;                
                }               
            }
        } else {
            if (req.query.types = 'i') {
                q[req.query.fields] = parseInt(req.query.values);
            } else {
                q[req.query.fields] = req.query.values;
            }
        }
        let where = new Object();
        where.where = q;
        where = orderby(req, where);
        where = pagination(req, where);
        return where;
    }
}

exports.where = (key, value) => {
    let r = new Object();
    let where = new Object();
    where[key] = value;
    r.where = where;
    return r;
}

