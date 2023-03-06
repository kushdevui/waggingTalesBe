const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { DB_SCHEMAS } = require('../constants')

const PetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ownerName:{
        type: String,
        required: true,
    },
    reasonForAdmit:{
        type: Array,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    sterlizationStatus:{
        type:Boolean,
        required:true
    },
    dateOfAdmission:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    remarks:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model(DB_SCHEMAS.DB_PETS,PetSchema);