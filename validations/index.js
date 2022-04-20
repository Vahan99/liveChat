const UserModel = require('../models/user');

module.exports = {
  isEmpty: {
    notEmpty: true,
    errorMessage: "This field cannot be empty."
  },
  isPasswordStrong: {
    isStrongPassword: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    },
    errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
  },
  isEmailTaken:{
    normalizeEmail: true,
    custom: {
        options: value => {
            return UserModel.find({
                email: value
            }).then(userModel => {
                if (userModel.length > 0) {
                    return Promise.reject('Email address already taken')
                }
            })
        }
    }
  }
}
