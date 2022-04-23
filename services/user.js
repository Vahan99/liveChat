const UserModel = require('../models/user');
const TokenManager = require('./tokenization');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserService {
  static async create (user){
    const password = bcrypt.hashSync(user.password, saltRounds);

    const userData = await UserModel.create({...user, password});
    const tokenData = { ...userData.email, ...userData._id };

    const tokens = {
      accessToken: TokenManager.generateAccessToken(tokenData),
      refreshToken: TokenManager.generateRefreshToken(tokenData)
    };

    return {user: userData, tokens};
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
