const mongoose = require('mongoose')
// field	DataType	Size	Constraints
// order_detail_id	integer	9	primary key
// orderId	integer	9	foreign key
// userId	integer	9	foreign key
// qty	integer	9	
// price	float	9	

let orderDetailSchema = new mongoose.Schema({

    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Qty:{
        type:Number
    },
    price:{
        type: Number
    }

})

let orderDetailModel = mongoose.model("orderDetail",orderDetailSchema)
module.exports = orderDetailModel