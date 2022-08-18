const categoryModel = require("../model/category-model")

module.exports.addItem = function (req, res) {
    let CategoryName = req.body.CategoryName
    let Available = req.body.Available

    let category = new categoryModel({

        CategoryName: CategoryName,
        Available: Available

    })
    category.save(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Category Added", status: 200, data: data })
        }
    })

}
module.exports.listItem = function (req, res) {
    categoryModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "All Items", status: 200, data: data })
        }
    })
}
module.exports.deleteItem = function (req, res) {

    let itemId = req.params.itemId

    categoryModel.deleteOne({ _id: itemId }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item Deleted", status: 200, data: data })
        }
    })

}
module.exports.updateItem = function (req, res) {

    let itemId = req.body.itemId
    let CategoryName = req.body.CategoryName
    let Available = req.body.Available

    categoryModel.updateMany({_id:itemId},{CategoryName:CategoryName,Available: Available }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item Deleted", status: 200, data: data })
        }
    })

}