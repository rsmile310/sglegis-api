const jwt = require('jsonwebtoken');
const { Keys } = require('../config/keys');

const verifyToken = (req, res, next) => {
    const bearerToken = req.headers["x-access-token"] || req.headers["authorization"] || req.headers["Token"] || req.headers["token"];
    console.log(req.headers);
  
    if (!bearerToken) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
        const token = bearerToken.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, Keys.secretOrKey);
          req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;