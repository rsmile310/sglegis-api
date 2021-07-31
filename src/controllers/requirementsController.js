const base = require('./baseController');


exports.getAll = (req, res, next) => {
    getQuery(req, res, next);
}

const getQuery = (req, res, next) => {
    let sql = `SELECT 	unity.*, document.*	
        FROM (
            SELECT 	d.document_scope_id, d.document_city_id, d.document_state_id, d.document_date, d.document_status_id, d.document_number,
                di.*, 
                iaa.area_aspect_id,
                a.area_name, ap.area_aspect_name, ds.document_scope_description, dst.status_description
            FROM documents d
            LEFT JOIN document_items di ON di.document_id = d.document_id
            LEFT JOIN items_areas_aspects iaa ON (iaa.document_item_id = di.document_item_id)
            LEFT JOIN areas a ON a.area_id = iaa.area_id
            LEFT JOIN areas_aspects ap ON ap.area_aspect_id = iaa.area_aspect_id
            LEFT JOIN document_scopes ds ON ds.document_scope_id = d.document_scope_id
            LEFT JOIN document_status dst ON dst.status_id = di.document_item_status_id
        ) document
        JOIN (
            SELECT 	cu.customer_unity_id, cu.customer_unity_name, cu.customer_unity_city_id, cu.customer_unity_uf_id, cu.customer_id,
                uaa.area_aspect_id
            FROM customers_unities cu
            LEFT JOIN unities_areas_aspects uaa ON (uaa.customer_unity_id = cu.customer_unity_id)
        ) AS unity ON 
            (document.area_aspect_id = unity.area_aspect_id AND document.document_scope_id = 3 AND document.document_city_id = unity.customer_unity_city_id AND document.document_state_id = unity.customer_unity_uf_id) OR
            (document.area_aspect_id = unity.area_aspect_id AND document.document_scope_id = 2 AND document.document_state_id = unity.customer_unity_uf_id) OR
            (document.area_aspect_id = unity.area_aspect_id AND document.document_scope_id = 1)       
        ${req.params.customerId !== 'all' ? `WHERE unity.customer_id = ${req.params.customerId}` : ''}`
    base.rawquery(sql, req, res, next);
}