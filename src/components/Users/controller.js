const UserDal = require('./DAL')
const _ = require("lodash");
var bcrypt = require('bcryptjs')


class Controller {
    async register(req, res, next) {
        try {
            const data = req.body;
            let userEmail = await UserDal.getOne({ email: data.email })
            if (!_.isEmpty(userEmail)) {
                return res.status(400).json({
                    status:"failure",
                    message:"User already exist with this email"
                })
            }
            // data.password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            // console.log(data.password, "heyyy");
            // await hitMail(data.email, data.password)
            let newUser = await UserDal.insert(req.body)
            return res.status(200).json({
                status:"success",
                msssage:"User Registered successfully",
                data: newUser.toAuthJSON()
            })
        } catch (error) {
            console.log(error);
          //  return res.sendResponse.exception(error)
        }
    }

    async login(req, res, next) {
        try {
            const data = req.body;
            let user = await UserDal.getOne({ email: data.email })
            if(_.isEmpty(user)){
                return res.status(401).json({
                    status:"failure",
                    message:"Invalid Credentials"
                })
            }
            let result  = await bcrypt.compare(data.password, user.password);
            if(!result){
                return res.status(401).json({
                    status:"failure",
                    message:"Password is not correct"
                })
            }
            return res.status(200).json({
                status:"success",
                message:"Successfully loggedIn"
            })

        } catch (error) {
            return res.status(500).json({
                status:"failure",
                message:"something went wrong"
            })
        }
    }
}

module.exports = new Controller();
