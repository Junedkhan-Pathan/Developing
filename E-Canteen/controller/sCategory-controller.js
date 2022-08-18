const subCategoryModel = require("../model/subCategory-model")

module.exports.addItem = function (req, res) {
    let subCategoryName = req.body.subCategoryName
    let Available = req.body.Available
    let categoryTable = req.body.categoryTable

    let subCategory = new subCategoryModel({

        subCategoryName: subCategoryName,
        Available: Available,
        categoryTable : categoryTable

    })
    subCategory.save(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Category Added", status: 200, data: data })
        }
    })

}
module.exports.listItem = function (req, res) {
    subCategoryModel.find().populate("categoryTable").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "All Items", status: 200, data: data })
        }
    })
}
module.exports.deleteItem = function (req, res) {

    let itemId = req.params.itemId

    subCategoryModel.deleteOne({ _id: itemId }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item Deleted", status: 200, data: data })
        }
    })

}
module.exports.updateItem = function (req, res) {

    let itemId = req.body.itemId
    let subCategoryName = req.body.subCategoryName
    let Available = req.body.Available
    let categoryTable = req.body.categoryTable

    subCategoryModel.updateOne({_id:itemId},{subCategoryName:subCategoryName,Available: Available,categoryTable:categoryTable }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Item Deleted", status: 200, data: data })
        }
    })

}