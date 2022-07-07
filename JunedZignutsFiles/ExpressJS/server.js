const express = require('express')
const app = express(); //to use all mehtod of express through the app variable so we store in it. 
const path = require('path');
const router = require('./routes/index');
const myRouter = require('./routes/index');


const PORT = process.env.PORT || 3000  //for available port.

app.use(express.static("public")); //the static folder is used for the static pages like html,css etc 
//bydefault on '/' it run the index file.when we use static middleware then no need to make it rout like api..

app.listen(PORT,()=>{            //PORT is denote avlble port or on 3000
    console.log(`server is now established on port${PORT}`)    //()=> callBack fun which tell us just message.
    
     });
    //    _________________________Simple file sending ___________________ 
// app.get('/',(req,res)=>{  //Home api 
//     // res.send('<h1>Hello...........From ExpressJS.</h1>')
//     res.sendFile(path.resolve(__dirname)+'/index.html') //it will not work due to we use ejs 
//    })
// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname) + '/About.html'); //its used to sendFile to the page
// })
// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/index.html') //very simlpe to make download just give path of that file.
    // })

    // ___________________________________Template Engines (EJS)_______________________________ 

//Template Engines 
//It is the tools which we use for make pages dynemics,to chage it data and content
//Many types of template engines available like PUG,EJS,hadleBars etc..

//firt we intall it like as : npm i ejs
app.set('view engine','ejs');    //its set to express that is we use ejs engine
//when we use it it find the files in bydefault in the views folder so we should make that folder and put all files of 
//ejs files in that folder
// console.log(app.get('views'))  // we can check to see that find in the view folder
// app.set('views','pages');    //we  can chage folder name like as..
// console.log(app.get('views')) // you can see it chage but just so name only so..
// app.set('views',path.resolve(__dirname)+ '/pages')
// console.log(app.set('views')) //Now whole path can we see..we reamin the name of vies as it is..
/*
// app.get('/',(req,res)=>{  //Home api 
//     res.render('index'); //when we use EJS then we can chage data dynemically so we use render instace of sendFile which
//                      //is find in the views folder and send.
// })
// app.get('/about',(req,res)=>{
//      res.render('About',{   //we can chage the data as and in that file get it by <%= nameOfVar%> as...
//         title:'AboutByEJS'   //chage that title name....
//      });
// })
// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/views/index.ejs') //Now we use EJS so path shoud also be chaged
// }) 
*/  //multiline comment are part are came frome the router foder to understand by below concepts..

//                      ________________Router_______________
//with the help of router we can organize the code in the simple and clean format.we all above api are put in the
//router folder.

app.use(myRouter);
// app.use('/en',myRouter); //we can add some prefix like as...


//                      ____________________MIDDLEWARE_____________________
//Middleware is simple function which are some get parameter like perform specific taske and give res.
//Basically it work between user req and res.
//to know more about it...
// Middleware article: https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113
// Types of express middleware
// Application level middleware app.use
// Router level middleware router.use
// Built-in middleware express.static,express.json,express.urlencoded
// Error handling middleware app.use(err,req,res,next)
// Thirdparty middleware bodyparser,cookieparser

//Applicaton level means just we apply in specific router, like as..
//for lern if we make one route which display some products..
// const myMiddleware = require('./middleware/auth');
// app.get('/api/products',myMiddleware,(req,res)=>{  //it is route base which simply apply in one route.
//                                                   //we apply here for lernigPurpose we make it ther routes file.
// //we can also aply multiper middlware using array like as [firstMidware,sec,..]
//     res.json([
//        {
//          id:'123',
//          product:'Mobile'
//        },
//        {
//          "id":"1234",
//          'product':'Laptops'
//        }  
//  ])
// })


//                                  ________Error Handeling_________
//It is very important in the NodeJS bcz in other programming lanuguage when error occure then it block certain thing
//or part but in node it crash the server so whole applcation can't run.. so its very imp.

app.use((req,res,next)=>{          //it run when no any valid inputs are passed in the url bar.
      res.json({msg:'Something went wrong...'})
})        








