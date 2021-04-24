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

exports.where = (key, value) => {
    let r = new Object();
    let where = new Object();
    where[key] = value;
    r.where = where;
    return r;
}

