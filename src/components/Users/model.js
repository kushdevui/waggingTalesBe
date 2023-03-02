const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { DB_SCHEMAS } = require('../constants')
const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../../../config/index').keys

var bcrypt = require('bcryptjs')


const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.methods.generateJWT = function(extra = {}) {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            ...extra,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 240)
        },
        jwtSecret
    )
}

UserSchema.pre("save", function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    }
    else {
        next();
    }

})

UserSchema.methods.toAuthJSON = function () {
    let userData = {
        _id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        token: this.generateJWT()
    }
    return userData
}

module.exports = mongoose.model(DB_SCHEMAS.DB_USERS, UserSchema);
