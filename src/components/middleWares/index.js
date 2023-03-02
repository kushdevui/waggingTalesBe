const _ = require("lodash");
const { validationResult } = require("express-validator");



const validator = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({
            status:"failure",
            message:{errors}
        })
    }
    next();
}

module.exports = {
    validator
}