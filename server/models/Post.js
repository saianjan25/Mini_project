const { default: mongoose } = require("mongoose");
const mongooes =  require("mongoose");

const postSchema = new mongooes.Schema({
    image : {
        type : String,
    },

    title : {
        type : String,
        required : [true,"Message cannot be empty"]
    },

    description : {
        type : String,
        required : [true,"description cannot be empty"]
    },

    likes : {
        type : Number,
        default : 0
    },
    comments : [{
        description : {
            type : String,
        },
        time : {
            type : Date,
            default : new Date()
        }
        
    }],
    user : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "User"
    }
},{
    timestamps : true
});

module.exports = mongoose.model("Post",postSchema)