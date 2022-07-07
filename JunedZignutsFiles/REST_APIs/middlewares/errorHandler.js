const joi = require("joi");
const CustomeErrorHandler = require('../services/CustomErrorHandler')


const errorHandler = (err,req,res,next)=>{
        
     let statusCode = 500;

     let data = {
          message:`Internal Error !!`,
          orginalMessage : err.message
     }
       
     if(err instanceof joi.ValidationError){
     
         statusCode = 422;

         let data = {
              message:err.message
         }

     }

     if(err instanceof CustomeErrorHandler){
        statusCode = err.status
          
             data = {
                msg: err.message
             }
     }

     res.status(statusCode).json(data)
}


module.exports = errorHandler