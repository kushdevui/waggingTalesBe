const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { DB_SCHEMAS } = require("../constants");


const StatusSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model(DB_SCHEMAS.DB_STATUS, StatusSchema)