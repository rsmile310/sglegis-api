const bcrypt = require('bcryptjs');

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