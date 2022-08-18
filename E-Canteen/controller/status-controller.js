const statusModel = require("../model/status-model")

module.exports.addStatus = function(req,res){

     let Status = req.body.Status

     let statusDetail = new statusModel({
        Status:Status
         
         
        })
        statusDetail.save(function(err,data){
            if (err) {
                res.json({ msg: "Somerthing went wrong", status: -1, data: err })
            } else {
                res.json({ msg: "location Added", status: 200, data: data })
            }
            
        })
}

module.exports.listStatus = function (req, res) {
    statusModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "All location listed", status: 200, data: data })
        }
    })
}
module.exports.removeStatus = function (req, res) {

    let StatusId = req.params.Status

    statusModel.deleteOne({_id:StatusId }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "location Removed", status: 200, data: data })
        }
    })

}
module.exports.updateStatus = function (req, res) {
      
    let Status = req.body.Status

    statusModel.updateOne({Status:Status},function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "location Updated", status: 200, data: data })
        }
    })

}