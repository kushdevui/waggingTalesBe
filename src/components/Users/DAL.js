
require('./model')
const mongoose = require("mongoose");
const { DB_USERS } = require('../constants').DB_SCHEMAS;
const UserModel = mongoose.model(DB_USERS);


class DAL {
    
    async getOne(filter) {
        return await UserModel.findOne(filter);
    }
    async insert(data) {
        const user = new UserModel(data);
        return user.save();
    }

}

module.exports = new DAL();
