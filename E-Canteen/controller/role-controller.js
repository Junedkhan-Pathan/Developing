const RoleModel = require("../model/role-model")

module.exports.addRole = function(req,res){
    let role = new RoleModel({
        RoleOfUser:req.body.RoleOfUser,
        RoleId:req.body.RoleId
    }) 

    role.save(function(err,data){
        if(err){
            console.log(err);
            res.json({msg:"Something went wrong",status:-1,data:req.body})
        }else{
            res.json({
                msg:"Role Added",status:2000,data:data
            })
        }
    })

}

module.exports.listDetails = function(req,res){
      
     RoleModel.find(function(err,data){

        if(err){
            res.json({msg:"Something went wrong",status:200,data:err})
        }else{
            res.json({meg:"Serched list",status:200,data:data})
        }
     })
}
module.exports.deleteSpacific = function(req,res){
    let RolId = req.params.roleId

    RoleModel.deleteOne({_id:RolId},function(err,data){
        if(err){
          res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Data DELETED Succesfully..!!",status:200,data:data})
        }
    })
}
module.exports.upDateData = function(req,res){
    let RoleId = req.body.RolId
    let RoleName = req.body.RoleName

    RoleModel.updateOne({"_id":RoleId},{RoleOfUser:RoleName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})   
             }
             else{
                res.json({msg:"Data UPDATED Succesfully..!!",status:200,data:data})
             }
    })
}