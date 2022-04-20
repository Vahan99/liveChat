const {isEmpty, isPasswordStrong, isEmailTaken} = require('./index');
const {body, checkSchema, validationResult} = require('express-validator');

const userSchema = {
    name:     isEmpty,
    email:    isEmailTaken,
    lastname: isEmpty,
    password: isPasswordStrong
}

module.exports = {
  userSchema
}
