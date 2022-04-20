const express = require('express');
const router  = express.Router();
const {checkSchema} = require('express-validator');
const userController = require('../controllers/user');
const {userSchema} = require('../validations/user');
const {validate} = require('../middleware/validate');

router
  .get('/',       userController.getAll)
  .get('/:id',    userController.find)
  .post('/',      validate(checkSchema(userSchema)), userController.create)
  .put('/:id',    validate(checkSchema(userSchema)), userController.update)
  .delete('/:id', userController.remove);

module.exports = router;
