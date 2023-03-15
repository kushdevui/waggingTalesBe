require('./model')
const mongoose = require("mongoose");
const { DB_PETS } = require('../constants').DB_SCHEMAS;
const PetModel = mongoose.model(DB_PETS);

class DAL{
    async insert(data){
        const Pet = PetModel(data);
        return Pet.save()
    }

    get(filter) {
        return PetModel.findOne(filter);
    }

    async getAll(){
        return PetModel.find({}).sort({ _id: -1 });
    }

    async update(filter,data){
        return PetModel.findOneAndUpdate(filter,{
            $set:data
        },{new:true})
    }

    async delete(filter){
        return PetModel.deleteOne(filter)
    }
}

module.exports = new DAL();