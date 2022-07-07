//                      _____________MIddleware_____________

function apiKey(req,res,next){

    const key = "12345678"
     
    let userKey = req.query.key
    if(key && key === userKey){
        next();
    }else{
        res.json({msg:"Key is NOT Valid!!"});
    }
}
module.exports = apiKey;
