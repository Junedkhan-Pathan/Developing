let orderDetailModel = require("../model/orderDetail-model")

module.exports.addOrderDetail = function (req, res) {
  let UserId = req.body.UserId
  let orderId = req.body.orderId
  let  Qty = req.body.Qty
  let price = req.body.price

    let orderDetail = new orderDetailModel({
        UserId: UserId,
        orderId: orderId,
        Qty: Qty,
        price: price
    })
    orderDetailModel.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item orderd!!", status: 200, data: data })
        }
    })

}
module.exports.listOrderDetail = function (req, res) {
    orderDetailModel.find(function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data listed successfully", status:200, data:data})
        }
    })
}
module.exports.removeOrderDetail = function (req, res) {
    let orderDetailId = req.params.orderDetailId
    orderDetailModel.deleteOne({id:orderDetailId},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Deleted successfully", status:200, data:data})
        }
    })
}
module.exports.updateOrderDetail = function (req,res) {
    let UserId = req.body.UserId
    let orderId = req.body.orderId
    let  Qty = req.body.Qty
    let price = req.body.price
    orderDetailModel.updateMany({UserId:UserId,orderId:orderId,Qty:Qty,price:price},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Updated successfully", status:200, data:data})
        }
    })
}