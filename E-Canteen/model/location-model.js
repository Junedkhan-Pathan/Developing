const mongoose = require('mongoose')
			
let loacationSchema = new mongoose.Schema({
    locationName:{
        type:String
    }
})

let locationModel = mongoose.model("location",loacationSchema)
module.exports = locationModel