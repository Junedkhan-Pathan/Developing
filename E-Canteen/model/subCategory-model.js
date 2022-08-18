const mongoose = require('mongoose')

let subCategorySchema = new mongoose.Schema({

    subCategoryName :{
        type:String
    },
    Available:{
        type:Boolean
    },
    categoryTable:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }

})

let subCategoryModel = mongoose.model("subCategory",subCategorySchema)
module.exports = subCategoryModel