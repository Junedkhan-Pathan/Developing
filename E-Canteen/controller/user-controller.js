const UserModel = require('../model/user-model')
const bcrypt = require("bcrypt")


 module.exports.addUser = function(req,res){

     let UserName = req.body.UserName
     let UserEmail = req.body.UserEmail
     let Password  = req.body.Password
     //For security Ecnrypy the password by below logic
     let ecxPassword = bcrypt.hashSync(Password,10)
     let Role_ID = req.body.Role_ID    
     
     let user = new UserModel({
         UserName : UserName,
         UserEmail : UserEmail,
         Password : ecxPassword,
         Role_ID: Role_ID
    })
       user.save(function(err,data){
            if(err){
                res.json({msg:"Something Went Wrong in",status:-1,data:err})
                
            }else{
                res.json({msg:"User added Successfully",status:200,data:data})
            }
       })

 }

  module.exports.listUsers = function(req,res){

    UserModel.find().populate("Role_ID").exec(function(err,data){
        if(err){
            res.json({msg:"Somet thing went wrong",status:-1,data:err})
        }else{
            res.json({msg:"Data listed",status:200,data:data})

        }
         
    })

  }

   module.exports.deleteUser = function(req,res){
       let userId = req.params.userId

    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"Somet thing went wrong",status:-1,data:err})
        }else{
            res.json({msg:"User deleted",status:200,data:data})

        }
         
    })

  }

   module.exports.updateUser = function(req,res){
    let UserName = req.body.UserName
    let UserEmail = req.body.UserEmail
    let Password = req.body.Password
    let Role_ID = req.body.Role_ID

 UserModel.updateMany({_id:Role_ID},{UserName:UserName,UserEmail:UserEmail,Password:Password},function(err,data){
    if(err){
        res.json({msg:"Somet thing went wrong",status:-1,data:err})
    }else{
        res.json({msg:"User Data Update",status:200,data:data})

    }
    })

 }

 module.exports.login = function(req,res){

    let login_Email = req.body.UserEmail
    let login_Password = req.body.Password
    
    // let isCorrect = false;
     let ans = false;
    UserModel.findOne({UserEmail:login_Email},function(err,data){
        if(data){
            let ans = bcrypt.compareSync(login_Password,data.Password)
            //  isCorrect = true
        if(ans == true){
            res.json({msg:"Login Successfully...",status:200,data:data})
        }else{
            res.json({msg:"Password Is Incorrect!!",status:-1,data:err})
        }
        }else{
            res.json({msg:"Email Id Dosen't exist!!",status:-1,data:err})

        }        
   })


 }