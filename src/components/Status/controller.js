const _ = require("lodash");
const StatusDal = require("./DAL");

class Controller{
    async create(req,res,next){
        try{
            const data = req.body;
            const exist = await StatusDal.get({ name: data.name })
            if(!_.isEmpty(exist)){
                return res.status(400).json({
                    status:"failure",
                    message:"Status already exist"
                })
            }
            let status = await StatusDal.insert(data);
            return res.status(200).json({
                status:"success",
                data: status
            })
        }catch(err){
            console.log("err", err)
        }
    }

    async get(req,res,next){
        try{
            const list = await StatusDal.getAll();
            return res.status(200).json({
                status:"success",
                data: list
            })
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new Controller()