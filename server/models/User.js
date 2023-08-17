const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,'Name cannot be empty'] 
    },
    email : {
        type : String,
        required : [true,'Email cannot be empty'],
        unique : [true,'Already existing email'],
        validate  : {
            validator : validator.isEmail,
            message : "not a valid email"
        }
    },
    password : {
        type : String,
        required : [true, "Password cannot be empty"]
    }
})

module.exports = mongoose.model("User",UserSchema);