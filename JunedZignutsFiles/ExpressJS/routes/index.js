//When we make large applicatone we make the routes for diffrent think like products,cart,etc to organizing

const router = require('express').Router();  //for roting we use the expres router like as and store it in variable.
const myMiddleware = require('../middleware/auth')

//when we want to applu middleware which is known as roter level then we can do it like as.
// router.use(myMiddleware)  //it is router level middleware which only access when we give right key as we made.
router.get('/',(req,res)=>{   
    res.render('index'); 
})
router.get('/about',(req,res)=>{
     res.render('About',{   
        title:'AboutByEJS'   
})
})
router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/views/index.ejs')
})
module.exports = router           //we export it to use in the main file.







