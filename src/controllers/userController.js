const { users } = require('../models');
const base = require('./baseController');
const email = require("../config/email");
const { generatePassword, getHash, verityPassword, loginJWT } = require('../utils/auth');
const validateLogin = require('../validations/login');
const { isEmpty } = require('../utils/functions');
const { Keys } = require('../config/keys');
const { customers_groups } = require('../models');

exports.getAll = (req, res, next) => {
    base.getAll(users, req, res, next, [{
        as: "customer_group",
        model: customers_groups,
        referenceKey: "customer_group_id",
        referenceValue: "customer_group_id"      
    }]);    
}

exports.getQuery = (req, res, next)=>{
    base.query(users, req, res, next, [{
        as: "customer_group",
        model: customers_groups,
        referenceKey: "customer_group_id",
        referenceValue: "customer_group_id"      
    }]);
}

exports.get = (req, res, next) => {
    base.get(users, req, res, next, 'user_id');
};

exports.post = async (req, res, next) => {
    // const str_pass = await generatePassword(10);
    const str_pass = "123456789";
    const hash_pass = await getHash(str_pass);
    req.body.user_password = hash_pass;

    // try {
    //     const { user_email } = req.body;
    //     await email.send(user_email, "You register into Sglegis successfully", "Your password is " + str_pass);
        base.insert(users, req, res, next);
    // } catch (error) {
    //     next(error);     
    // }
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

exports.login = async (req, res, next) => {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;
    const user = await users.findOne({
        where: { user_email: email }
    });
    if (isEmpty(user)) return res.status(400).json({
        email: "No user found"
    });
    if (user.is_disabled === '1') return res.status(400).json({
        email: "Account is not activated"
    });

    if (await verityPassword(password, user.user_password)) {
        const jwtBearerToken = await loginJWT(user);
        if (jwtBearerToken) {
            return res.json({
                success: true,
                token: jwtBearerToken,
                user: {
                    id: user.user_id,
                    name: user.user_name,
                    role: user.user_role
                }
            });
        }
    } else {
        return res.status(400).json({
            password: "Password incorrect"
        });
    }
}

exports.current = async (req, res, next) => {
    const user = await users.findOne({
        where: {
            user_id: req.user.id
        }
    });

    return res.json({
        id: user.user_id,
        email: user.user_email,
        name: user.user_name,
        role: user.user_role,
        user_profile_type: user.user_profile_type,
        customer_group_id: user.customer_group_id,
    });
}