const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Keys } = require('../config/keys');
const { isEmpty } = require('./functions');


exports.generatePassword = (len = 6) => {
    if (len < 6) len = 6;       // Minimum 6 characters
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(len, (err, salt) => {
            if (err) reject(err);
            const strSalt = salt.slice(salt.length - len, salt.length)
            if (strSalt === strSalt.toLowerCase()) this.generatePassword(len); // At least 1 captial letter
            if (strSalt === strSalt.toUpperCase()) this.generatePassword(len)  // At least 1 lowercase letter
            if (!/\d/.test(strSalt)) this.generatePassword(len);             // At least 1 number
            resolve(strSalt);
        })
    })
}

exports.getHash = (strPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(strPassword, salt, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            })
        })
    })
}  

exports.verityPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash).then(isMatch => resolve(isMatch))
    })
}

exports.loginJWT = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign({
            id: user.user_id,
            name: user.user_name,
            role: user.user_role,
            email: user.user_email
        }, Keys.secretOrKey, { expiresIn: '1h' }, (err, token) => {
            if (!isEmpty(err)) reject(err);
            resolve('Bearer ' + token);
        })
    })
}