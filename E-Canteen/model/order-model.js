const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
  UserId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
  },
  total:{
      type:Number
  },
  statusId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"status"
  },
  locationId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"location"
  }
})

let orderModel = mongoose.model("order",orderSchema)
module.exports = orderModel
