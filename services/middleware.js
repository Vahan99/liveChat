const {checkSchema} = require('express-validator');
const {userSchema} = require('../validations/user');
const { validate } = require('../middleware/validate');
const auth = require('../middleware/auth');

module.exports = class MiddlewareManager {
  /**
    Add your middleware here
  */
  static listMiddleware(){
    return {
      auth,
      validate: validate(checkSchema(userSchema))
    }
  }

  get middlewares(){
    return Object.values(this.listMiddleware());
  }

  static only(...middlewareNames){
    const middlewares = [];

    for(let middlewareName of middlewareNames){
      if(middlewareName && this.listMiddleware()[middlewareName]){
        middlewares.push(this.listMiddleware()[middlewareName])
      }
    }

    return middlewares;
  }
}
