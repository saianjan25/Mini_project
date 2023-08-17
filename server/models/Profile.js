const mongooes = require("mongoose");

const profileSchema = mongooes.Schema({
    user : {
        type : mongooes.SchemaTypes.ObjectId,
        ref : "User"
    },

    dateOfBirth : {
        type : String    
    },

    gender : {
        type : String,
        required : true
    }
})

module.exports = mongooes.model("Profile",profileSchema)