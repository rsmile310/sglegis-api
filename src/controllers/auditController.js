const { audits } = require('../models');
const { options } = require('./queryoptions');
const base = require('./baseController');
const { isEmpty } = require('../utils/functions');
const db = require('../models/index');

exports.getAll = (req, res, next) => {
    const q = req.query;    
    let sql = `SELECT * FROM audits a WHERE audit_id = null`;
    let sqlPre = `SELECT a.*, aa.area_aspect_name, di.document_item_number 
        FROM audits a
        LEFT JOIN areas_aspects aa ON a.area_aspect_id = aa.area_aspect_id
        LEFT JOIN document_items di ON di.document_item_id = a.document_item_id WHERE `;
    console.log('<===========><===========>');
    console.log(q);
    if (!isEmpty(q)) {
        sql = sqlPre;
        if (typeof q.document_item_ids === 'object') {
            for (let i = 0; i < q.document_item_ids.length; i ++) {
                if (i !== q.document_item_ids.length - 1)
                    sql += `(a.document_item_id = ${q.document_item_ids[i]} AND a.area_aspect_id = ${q.area_aspect_ids[i]}) OR `;
                else
                    sql += `(a.document_item_id = ${q.document_item_ids[i]} AND a.area_aspect_id = ${q.area_aspect_ids[i]})`;            
            }
        } else {
            sql += `(a.document_item_id = ${q.document_item_ids} AND a.area_aspect_id = ${q.area_aspect_ids})`;
        }
    }
    sql.trim();
    db.sequelize.query(sql).then(values => {
        res.send(values[0]);
    });
}

exports.getQuery = (req, res, next)=>{
    base.query(audits, req, res, next);
}

exports.post = (req, res, next) => {
    base.insert(audits, req, res, next);
}
