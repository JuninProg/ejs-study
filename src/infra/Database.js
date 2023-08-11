const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

module.exports = class Database {
  static async connect() {
    const mongodb = await MongoMemoryServer.create();
    const uri = mongodb.getUri();
    await mongoose.connect(uri);
    console.log(`Connected to MongoDB => ${uri}`);
  }
};
