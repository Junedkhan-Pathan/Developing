const locationModel = require("../model/location-model")

module.exports.addLocation = function(req,res){

     let locationName = req.body.locationName

     let locationAddress = new locationModel({
         locationName:locationName
         
         
        })
        locationAddress.save(function(err,data){
            if (err) {
                res.json({ msg: "Somerthing went wrong", status: -1, data: err })
            } else {
                res.json({ msg: "location Added", status: 200, data: data })
            }
            
        })
}

module.exports.listLocation = function (req, res) {
    locationModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "All location listed", status: 200, data: data })
        }
    })
}
module.exports.removeLocation = function (req, res) {

    let locationName = req.body.locationName

    locationModel.deleteOne({locationName:locationName }, function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "location Removed", status: 200, data: data })
        }
    })

}
module.exports.updateLocation = function (req, res) {
      
    let locationName = req.body.locationName

    locationModel.updateOne({locationName:locationName},function (err, data) {
        if (err) {
            res.json({ msg: "Somerthing went wrong", status: -1, data: err })
        } else {
            res.json({ msg: "location Updated", status: 200, data: data })
        }
    })

}