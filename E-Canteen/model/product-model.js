const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
 
    productName:{
        type:String
    },
    proCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    proSubCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "subCategory"

    },
    bestPrice:{
        type: Number
    },
    offerPrice:{
        type: Number
    },
    offerPersentage:{
        type: Number
    }

})

let productModel = mongoose.model("product",productSchema)
module.exports = productModel