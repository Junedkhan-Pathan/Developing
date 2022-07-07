const joi = require('joi');   //it is used for validation to use npm i joi and require...
const CustomeErrorHandler = require('../services/CustomErrorHandler');
const User = require("../Models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const JwtService  = require('../services/JwtService');
const JwtServiceToken = require('../services/JwtService');
const Users = require('../Models/Users');


const registerController =  {
    
    register(req,res,next){
  
         //Checking validation 
            const registerSchema = joi.object({

                name:joi.string().min(4).max(20).required(),
                email:joi.string().email().required(),
                password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
                confirm_password:joi.ref("password")
            })

             const { error } = registerSchema.validate(req.body)

             if(error){
                
                return next(error);

             }
          
        //Checking the user Alredy Exist
          try{

              let checkUser = User.Users.exists({email:req.body.email})              
              if(checkUser){
                  
                return next(CustomeErrorHandler.alredyEmailExist('User alredy exists'));
                  
            }
            }catch(err){
                next(err);

            }
             // Save user in database
             let{name,email,password} = req.body
              
             //encrypt the password

          let hashPassword = bcrypt.hashSync(password,10);

            let  user =  new User({
                name:name,
                email:email,
                password:hashPassword
            })
           // user.save(user,(err,data)=>{
           //     if(err){
           //         res.json({msg:"User Not saved",status:-1,data:err})
           //     }else{
           //         res.json({msg:"Data Saved Successfully",status:200,data:data})
           //     }
           // })
           let accessToken;
           try{
                 const result =  user.save()
                 console.log(result._id)
                     
               //JWT token
            accessToken = JwtServiceToken.sign({"_id":result._id,"role":result.role})

           }catch(err){

               next(err);
           }

         res.json({accessToken:accessToken});
     
     
    }
}

module.exports = registerController;