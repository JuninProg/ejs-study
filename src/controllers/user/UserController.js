const UserModel = require('../../models/UserModel');

module.exports = class UserController {
  static async create(data) {
    try {
      await UserModel.create(data);
    } catch (error) {
      console.error(error);
    }
  }

  static async list() {
    let users = [];
    try {
      users = await UserModel.find();
    } catch (error) {
      console.error(error);
    }
    return users;
  }
};
