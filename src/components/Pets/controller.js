const PetDal = require('./DAL')
const _ = require("lodash");

class Controller {
    async insert(req, res) {
        try{
            let data = req.body;
            let Pet = await PetDal.insert(data);
            return res.status(200).json({
                status:"success",
                msssage:"Pet added successFully",
                data: Pet
            })
        }catch(err){
            return res.status(500).json({
                status:"failure",
                message:"something went wrong",
            })
        }
    }
}

module.exports = new Controller()