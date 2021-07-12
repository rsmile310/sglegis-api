const { users } = require('../models');
const base = require('./baseController');
const email = require("../config/email");
const { generatePassword, getHash } = require('../utils/auth');

exports.getAll = (req, res, next) => {
    base.getAll(users, req, res, next);    
}

exports.getQuery = (req, res, next)=>{
    base.query(users, req, res, next);
}

exports.get = (req, res, next) => {
    base.get(users, req, res, next, 'user_id');
};

exports.post = async (req, res, next) => {
    const str_pass = await generatePassword(10);
    const hash_pass = await getHash(str_pass);
    req.body.user_password = hash_pass;

    try {
        const { user_email } = req.body;
        await email.send(user_email, "You register into Sglegis successfully", "Your password is " + str_pass);
        base.insert(users, req, res, next);
    } catch (error) {
        next(error);     
    }
}

exports.put = (req, res, next) => {
    base.update(users, req, res, next, 'user_id');
}

exports.delete = (req, res, next) => {
    base.delete(users, req, res, next, 'user_id');
}

exports.resetPassword = async (req, res, next) => {
    const str_pass = await generatePassword(10);
    const hash_pass = await getHash(str_pass);
    req.body.user_password = hash_pass;    

    try {
        const { user_email } = req.body;
        await email.send(user_email, "Your password has been changed", "Your password is " + str_pass);
        base.update(users, req, res, next, 'user_id');
    } catch (error) {
        next(error);    
    }
}