const mongoose = require('mongoose')

let categorySchema = new mongoose.Schema({

    CategoryName :{
        type:String
    },
    Available:{
        type:Boolean
    }

})

let categoryModel = mongoose.model("category",categorySchema)
module.exports = categoryModel