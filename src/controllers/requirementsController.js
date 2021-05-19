const base = require('./baseController');


exports.getAll = (req, res, next) => {
    getQuery(req, res, next);
}

const getQuery = (req, res, next) => {
    let sql = `
    select
            req_data.*
        from (
            select 
                d.document_id, d.document_type, d.document_number, d.document_date, d.document_state_id, d.document_city_id, 
                ds.document_scope_description,
                di.document_item_id, di.document_item_number, di.document_item_status_id, di.document_item_subject, di.document_item_description,
                iaa.area_id, a.area_name, iaa.area_aspect_id, aa.area_aspect_name, d.document_scope_id,                
                unity_data.area_aspect_id as aspect, 
                unity_data.customer_unity_name, unity_data.customer_business_name
            from documents d
            inner join document_items di on d.document_id = di.document_id
            inner join items_areas_aspects iaa on di.document_item_id = iaa.document_item_id 
            inner join areas a on iaa.area_id = a.area_id 
            inner join areas_aspects aa on iaa.area_aspect_id = aa.area_aspect_id 
            inner join document_scopes ds on d.document_scope_id = ds.document_scope_id       
        inner join (
                select
                    cu.customer_id, cu.customer_unity_id, cu.customer_unity_uf_id, cu.customer_unity_city_id,
                    uaa.area_id, uaa.area_aspect_id, cu.customer_unity_name, cs.customer_business_name
                from customers_unities cu
                inner join unities_areas_aspects uaa on cu.customer_unity_id = uaa.customer_unity_id 
                inner join customers cs on cu.customer_id = cs.customer_id
            ) unity_data on  
                (d.document_scope_id = 3 /*ESTADUAL*/ and d.document_city_id = unity_data.customer_unity_city_id and unity_data.area_aspect_id = iaa.area_aspect_id and unity_data.area_id = iaa.area_id) or 
                (d.document_scope_id = 2 /*ESTADUAL*/ and d.document_state_id = unity_data.customer_unity_uf_id and unity_data.area_aspect_id = iaa.area_aspect_id and unity_data.area_id = iaa.area_id) or 
                ((d.document_scope_id = 1 or d.document_scope_id = 4)/*FEDERAL ou GLOBAL*/ and iaa.area_aspect_id = unity_data.area_aspect_id and unity_data.area_id = iaa.area_id)  
        ) as req_data
    `;

    base.rawquery(sql, req, res, next);
}