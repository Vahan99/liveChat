const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');
const middlewareManager = require('../services/middleware');

router
  .get('/',         middlewareManager.only('auth'), userController.getAll)
  .get('/:id',      middlewareManager.only('auth'), userController.find)
  .post('/',        middlewareManager.only('auth', 'validate'), userController.create)
  .put('/:id',      middlewareManager.only('auth', 'validate'), userController.update)
  .delete('/:id',   middlewareManager.only('auth'), userController.remove);

module.exports = router;
