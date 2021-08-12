const { actionplans } = require('../models');
const base = require('./baseController');
const db = require('../models/index');
const sequelize = require('sequelize');
const { isEmpty } = require('../utils/functions');
const emailService = require("../config/email");

exports.getAll = (req, res, next) => {
    //base.getAll(actionplans, req, res, next);    
    let ret = [];
    let sql = `select * 
                from actionplans a
                inner join actionplan_items ai on a.actionplan_id = ai.actionplan_id
                where a.unit_id = ${req.params.unit_id} 
                and a.item_area_aspect_id = ${req.params.item_area_aspect_id} 
                and a.actionplan_id = ${req.params.actionplan_id} 
                and status != 3;`; //all actionplan but not deleted

    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        res.send(values);
    });
}

exports.getQuery = (req, res, next)=>{
    //base.query(actionplans, req, res, next);

    let ret = [];
    let sql = `select * 
                from actionplans a
                inner join actionplan_items ai on a.actionplan_id = ai.actionplan_id
                where a.unit_id = ${req.query.unit_id} 
                and a.item_area_aspect_id = ${req.query.item_area_aspect_id} 
                and status != 3;`; //all actionplan but not deleted

    db.sequelize.query(sql, { type: sequelize.QueryTypes.SELECT }).then(values => {
        res.send(values);
    });
}


exports.post = (req, res, next) => {
    //base.insert(actionplans, req, res, next);

    let actionplans = req.body;

    //if there is no id, so (insert)
    if (actionplans.actionplan_id <= 0)
        insert(actionplans, res);
    else
        update(actionplans, res);
};

function insert(actionplans, res) {
    db.sequelize.transaction(function (t) {
        return db.actionplans.create(actionplans, { transaction: t }).then(function (new_action_plan) {
            var items = actionplans.actionplan_items;
            items.forEach(i => {
                i.actionplan_id = new_action_plan.actionplan_id;
            });
            sendEmail(new_action_plan.actionplan_id, actionplans.activityChanges);
            return db.actionplan_items.bulkCreate(items, { transaction: t }).then(function (new_item) {
                res.send(new_action_plan);
            });
        });
    });
}

function update (actionplans, res) {
    db.sequelize.transaction(function (t) {
        return db.actionplans.update(actionplans, { transaction: t, where:{actionplan_id: actionplans.actionplan_id} }).then(function (new_action_plan) {
            var items = actionplans.actionplan_items;
            sendEmail(actionplans.actionplan_id, actionplans.activityChanges);
            return db.actionplan_items.bulkCreate(items, { transaction: t, updateOnDuplicate: ["updatedAt", "status"] }).then(function (new_item) {
                res.send(new_action_plan);
            });
        });
    });
};

async function sendEmail(actionPlanId = "", activityChanges = {}) {
    const { customer_name, unity_name, actionplan_items, aspect_name } = activityChanges;
    if (!isEmpty(actionplan_items)) {
        actionplan_items.forEach(async (actionPlan) => {
            const { email, activity, deadline, responsible, status } = actionPlan;
            
            let message = "";
            let subject = "";
            message += `Olá ${responsible}, \n\n`;
            
            if (status == 3) {
                message += `Os seguintes planos de ação foram removidos: \n\n\n\n`;
                subject = "An action plan has been removed.";
            }
            else {
                message += `Foi feito inclusão de plano de ação sob sua responsabilidade, conforme segue: \n\n\n\n`;
                subject = "An action plan added to your responsibility.";
            }
            
            message += `Número: ${actionPlanId} \n\n`;
            message += `Empresa: ${customer_name} \n\n`;
            message += `Unidade: ${unity_name} \n\n`;
            message += `Assunto: ${aspect_name} \n\n`;
            message += `Atividade: ${activity} \n\n`;
            message += `Vencimento: ${deadline} \n\n`;
            
            console.log("<============> Sending Email <============>")
            console.log(email, subject, message);

            await emailService.send(email, subject, message);
        })
        console.log("<============> Sent Email successfully! <============>");
    }
}
