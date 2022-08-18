const cartModel = require("../model/cart-model")

module.exports.addtoCart = function(req,res){
    let UserId = req.params.UserId
    let Quentity = req.body.Quentity
   
    let cart = new cartModel({
        UserId:UserId,
        Quentity:Quentity
    
     })
     cart.save(function(err,data){
         if(err){
        res.json({msg:"Something went wrong",status:-1,data:err})
    }else{
        res.json({msg:"Add to cart Successfully",status:200,data:data})
    }
})
}

module.exports.listCart = function(req,res){
    cartModel.find(function(err,data){
        if(err){
            
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            
            res.json({msg:"Listed cart Successfully",status:200,data:data})
        }
    })
}

module.exports.removeFromCart = function(req,res){
    let UserId = req.params.UserId
     cartModel.deleteOne({UserId:UserId},function(err,data){
         if(err){
        res.json({msg:"Something went wrong",status:-1,data:err})
    }else{
        res.json({msg:"Removed From cart Successfully",status:200,data:data})
    }
})
}

module.exports.updateCart = function(req,res){
    let UserId = req.body.UserId
    let Quentity = req.body.Quentity
    cartModel.updateMany({UserId:UserId,Quentity:Quentity},function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            
            res.json({msg:" Updated Successfully..",status:200,data:data})
        }
    })
}