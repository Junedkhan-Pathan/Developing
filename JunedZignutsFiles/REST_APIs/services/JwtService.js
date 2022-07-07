const jwt = require('jsonwebtoken');

class JwtServiceToken{

     static sign(payload,expiry = "60s",secret = "thsiissecret"){

        return jwt.sign(payload,secret,{expiresIn:expiry});
 
     }
    }

    module.exports = JwtServiceToken;
