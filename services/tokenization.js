const jwt = require('jsonwebtoken');
const { tokens } = require('../config/index');

module.exports = class TokenManager {
  static generateAccessToken(payload) {
    const { secret, type, expiresIn } = tokens.access;
    return jwt.sign({...payload, type, expiresIn}, secret, { expiresIn });
  }

  static generateRefreshToken(payload) {
    const { secret, type, expiresIn } = tokens.refresh;
    return jwt.sign({...payload, type, expiresIn}, secret, { expiresIn });
  }

  static verify(token, secret){
    try {
      const decoded = jwt.verify(token, secret);

      console.log("Decoded token:", decoded);

    } catch(err) {
      console.log("Token Err: ", err);
    }
  }
}
