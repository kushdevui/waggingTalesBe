require('./model')
const mongoose = require("mongoose");
const { DB_PETS } = require('../constants').DB_SCHEMAS;
const PetModel = mongoose.model(DB_PETS);

class DAL{
    async insert(data){
        const Pet = PetModel(data);
        return Pet.save()
    }
}

module.exports = new DAL();