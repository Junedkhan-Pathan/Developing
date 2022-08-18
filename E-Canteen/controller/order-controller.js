let orderModel = require("../model/order-model")

module.exports.addOrder = function (req, res) {
    let UserId = req.body.UserId
    let total = req.body.total
    let statusId = req.body.statusId
    let locationId = req.body.locationId

    let order = new orderModel({
        UserId: UserId,
        total: total,
        statusId: statusId,
        locationId: locationId
    })
    order.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item orderd!!", status: 200, data: data })
        }
    })

}
module.exports.listOrder = function (req, res) {
    orderModel.find(function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data listed successfully", status:200, data:data})
        }
    })
}
module.exports.removeOrder = function (req, res) {
    let orderId = req.params.orderId
    orderModel.deleteOne({id:orderId},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Deleted successfully", status:200, data:data})
        }
    })
}
module.exports.updateOrder = function (req, res) {
    let UserId = req.params.UserId
    let total =  req.params.total
    let statusId =  req.params.statusId
    let locationId = req.params.locationId
    orderModel.updateMany({UserId:UserId,total:total,statusId:statusId,locationId:locationId},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Updated successfully", status:200, data:data})
        }
    })
}