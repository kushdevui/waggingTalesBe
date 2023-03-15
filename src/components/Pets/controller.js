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

    async update(req,res,next){
        try{
            let data = req.body;
            let _id = req.params.id 
            let updatedPet = await PetDal.update({_id},data);
            return res.status(200).json({
                status:"success",
                data:updatedPet
            })
        }catch(err){
            console.log("err", err)
        }
    }

    async getAll(req,res,next){
        try{
            const list = await PetDal.getAll();
            return res.status(200).json({
                status:"success",
                data: list
            })
        }catch(err){
            console.log("err", err)
        }
    }

    async delete(req,res,next){
        try{
            let _id = req.params.id;
            let pet = await PetDal.get({_id});
            if(!pet){
                return res.status(401).json({
                    status:"failure",
                    message: "no pet found by this id"
                }) 
            }
            const petDetail = await PetDal.delete({_id});
            return res.status(200).json({
                message:"pet deleted successfully"
            })

        }catch(err){
            console.log("err", err)
        }
    }
}

module.exports = new Controller()