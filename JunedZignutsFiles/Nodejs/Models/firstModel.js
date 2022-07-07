const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    E_Name:String,
    E_No:Number,
    Dep_Id:Number,
    join_Date:Date,
    end_Date:Date
})

module.exports = mongoose.model('employees',userSchema);

