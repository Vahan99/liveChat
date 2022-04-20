const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserService {
  static async create (user){
    const password = bcrypt.hashSync(user.password, saltRounds);
    return await UserModel.create({...user, password});
  }

  static async update(user, _id){
    return await UserModel.findOneAndUpdate({_id}, user, {new: true});
  }

  static async remove(_id){
    return await UserModel.deleteOne({_id});
  }

  static async getAll(){
    return await UserModel.find({});
  }

  static async find(_id){
    return await UserModel.findById(_id).exec();
  }
}

module.exports = UserService;
