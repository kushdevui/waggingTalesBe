require("./model");
const mongoose = require("mongoose");
const { DB_STATUS } = require('../constants').DB_SCHEMAS;
const statusModel = mongoose.model(DB_STATUS);

class DAL{
    async get(filter){
       return statusModel.findOne(filter)
    }
    async getAll(){
        return statusModel.find({}).sort({ _id: -1 });
    }

    async insert(data){
        const statusData = new statusModel(data);
        return statusData.save()
    }
}

module.exports = new DAL();
