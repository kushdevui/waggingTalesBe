
const databaseConfig=require('./database');
const keys=require('./keys')


let config = {
    keys: keys[process.env.NODE_ENV || "development"],
    database: databaseConfig[process.env.NODE_ENV || "development"],
}

module.exports=config;