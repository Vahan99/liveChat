const UserService = require('../services/user');

const create = async (req,res) => {
  try {
    const user = req.body;

    const saved = await UserService.create(user);

    return res.send(saved);

  } catch(err) {
    res.status(500).send(err);
  }
}

const update = async (req,res) => {
  try {
    const user = req.body;

    const _id = req.params.id;

    const saved = await UserService.update(user, _id);

    return res.send(saved);

  } catch(err) {
    res.status(500).send(err);
  }
}

const remove = async (req,res) => {
  try {
    const _id = req.params.id;

    const deleted = await UserService.remove(_id);

    return res.send(deleted);

  } catch(err) {
    res.status(500).send(err);
  }
}

const getAll = async (req,res) => {
  try {
    const users = await UserService.getAll();

    return res.send(users);

  } catch(err) {
    res.status(500).send(err);
  }
}

const find = async (req,res) => {
  try {
    const _id = req.params.id;

    const found = await UserService.find(_id);

    return res.send(found);

  } catch(err) {
    res.status(500).send(err);
  }
}


module.exports = {
  find,
  getAll,
  remove,
  create,
  update,
}
