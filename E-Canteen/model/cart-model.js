const mongoose = require('mongoose')	

let cartSchema = new mongoose.Schema({
    UserId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Quentity:{
        type:Number
    }
})

let cartModel = mongoose.model("cart",cartSchema)
module.exports = cartModel

