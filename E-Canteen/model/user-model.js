const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    UserName:{
        type:String
    },
    UserEmail:{
        type:String
    },
    Password:{
        type:String
    },
    Role_ID : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
})

let UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel