const productModel = require("../model/product-model")

module.exports.addProduct = function (req, res) {
    let productName = req.body.productName
    let proCatId = req.body.proCatId
    let proSubCatId = req.body.proSubCatId
    let bestPrice = req.body.bestPrice
    let offerPrice = req.body.offerPrice
    let offerPersentage = req.body.offerPersentage
  

    let product = new productModel({
         productName :productName,
         proCatId :proCatId,
         proSubCatId :proSubCatId,
         bestPrice :bestPrice,
         offerPrice :offerPrice,
         offerPersentage :offerPersentage
    })
    product.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item orderd!!", status: 200, data: data })
        }
    })

}
module.exports.listProduct = function (req, res) {
    productModel.find(function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data listed successfully", status:200, data:data})
        }
    })
}
module.exports.removeProduct = function (req, res) {
    let orderId = req.params.orderId
    productModel.deleteOne({id:orderId},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Deleted successfully", status:200, data:data})
        }
    })
}
module.exports.updateProduct = function (req, res) {
    let productName = req.body.productName
    let proCatId = req.body.proCatId
    let proSubCatId = req.body.proSubCatId
    let bestPrice = req.body.bestPrice
    let offerPrice = req.body.offerPrice
    let offerPersentage = req.body.offerPersentage
  
    productModel.updateMany({productName :productName,
        proCatId :proCatId,
        proSubCatId :proSubCatId,
        bestPrice :bestPrice,
        offerPrice :offerPrice,
        offerPersentage :offerPersentage},function (err, data) {
        if (err) {

            res.json({ msg: "Somthing went wrong", status: -1, data: err })

        } else {

            res.json({ msg: "Data Updated successfully", status:200, data:data})
        }
    })
}