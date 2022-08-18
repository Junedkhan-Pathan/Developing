const mongoose = require('mongoose')

let RoleSchema = new mongoose.Schema({
    RoleOfUser:{
        type: String
    },
    RoleId:{
        type: String
    }
})

let RoleModel = mongoose.model("Role",RoleSchema)

module.exports = RoleModel