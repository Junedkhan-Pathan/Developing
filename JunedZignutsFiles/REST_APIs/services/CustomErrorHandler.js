
class CustomeErrorHandler extends Error {

    constructor(status,message){
        super();
        this.status = status,
        this.message = message
    }


    static alredyEmailExist(message){
     
        return new CustomeErrorHandler(409,message);
    }
    
}

module.exports = CustomeErrorHandler;