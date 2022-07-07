// 1.
        //Intro & installarion of NodeJS..
//2.
// function sum(a,b){              //it's simple function
//     return a+b;
// }

// let sum = function(a,b){   //it's Anonymous function: A function which not contain name its called....
//     return a+b; 
// }

// let sum = (a,b) => {return a+b;}  it's called Arrow function (ES6)

// function sum(a,b){
//     return a+b; 
// }
// let callBFucn = function(sum){           //callBack function: pass function in function is called...
//     console.log(sum(10,20))
// }
// callBFucn(sum);

// 3. 
// module.exports = varName;              //to export variable or file to use it
// const imPort = require('Path&Name of File')   //to import file and packages to use in our applications
 
//   4.
// const http = require('http');                 //Node inbuit pakage are take to make server..
// http.createServer(function(req,res){          //method of http to create server
//     res.writeHead(200,{'content-type':'text/html'})  //its define the type of contain of text which are lies in
//     res.end('Hello from nodeJs.....');             //to stop the server it neccessory to end.
//     console.log('server run on port 8000')       //it check to message 
// }).listen(8000)                               //do port number to run server on that.
 

// 5. small webPage
// const http = require('http')

// const page = `
// '<h1>.............Hello From NodeJS...........</h1>
// <form action="/action_page.php">
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname" value="junedkhan"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname" value="Pathan"><br><br>
//   <input type="submit" value="Submit">
// </form> 

// `
// http.createServer(function(req,res){
//  res.writeHead(200,{'Content-Type':'text/html'})     //it must if we use html or if we want tu use json then write json
//  res.write(page);
//  res.end()
// }).listen(8000)

// 6.
//  NPM : Node package manager d
// npm init -y         // to create package with bydefault name and details
// npm init            // to create package with input details.
// npm install or i <name of pakage>          //to install package
// npm install or i <name of pakage> -D/-g          //to install package only in development /globally
//npm uninstall pakageNme             //uninstall package
//npm ls                  //to show the installed packages  in locally
//npm ls -g             //to show package which are installed in globally in system bin lib folder

// 7.
 //              ____nodeMailer____
 //it is used for sending mail in through the nodejs.
// const nodeMailer = require('nodemailer');      //First install and do require in project.

//   let transporter = nodeMailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'mailid.gmail.com', // user mail
//       pass: 'yourPassword',           // password
//     },
//   });

//   // send mail with defined transport object
//   const mailOption = {
//     from: 'senderMailr@gmail.com', // sender address
//     to: 'receivermail@gmail.com', // list of receivers
//     subject: "NodeJS", // Subject line
//     text: "Hello world This mail from NodeJS...", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   } ;

//   transporter.sendMail(mailOption,function(err,info){
//       if(err){
//           console.log(err)
//       }else{
//           console.log('Email sended Successfully...', info.response)
//       }
//   })

// 8. 
//           _________nodemon________
// npm i --save -dev nodemon              //its help to chages of code will automatically server restart..

//9.
            // ___________REad file________________
//used to read file...
// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req,res){
//     fs.readFile('./flderName/test.txt',function(err,data){
//         if(err){
//             console.log(err);
//         }
//         res.writeHead(200,{'Content-Typed':'text/html'})
//         res.write(data);
//         res.end();
    
//     }) 
// }).listen(8080)

// 10.                         ___________MySQL connect______________
//    npm i mysql          //install
// const mysql = require('mysql')

// const conn = mysql.createConnection({
//         host:'localhost',
//         user:'admin',
//         password:'Admin@123',
//         database:'dbTask'

// });

// conn.connect(function(err){
//    if(err) {
//            console.log(err);
//    } 
//    conn.query('select * from Employees',function(err,result){
//         if(err) {
//                 console.log(err);
//         } 
//            console.log(result)
//         //    console.log(result[0])           //we can access all property like as...
//         //    console.log(result[1].Emp_No);
//         //    console.log(result[2].Name);
//    })
// })


// 11.           _________Event Emitter_____________
// const Emitter = require('events');            //require to used in project
// const myEvent = new Emitter();       //events is class so we make that instance

// myEvent.on('listner',function(data){                //it is listner where we make our logic 
//         console.log(`${data} is reseived!!`);
// })

// myEvent.emit('listner','yourData');        //it is caller which call that function or emiiter..

// 12.         _______________Express ______________ 
// npm i express          //install package
// const express = require('express');
// const app = express();

// app.get('/',function(req,res){
//         console.log('Server started!!')
//         res.write("Hello from Express in NodeJS");
//         res.end();
// }).listen(8080)

// 13.            ______________Routing With Express__________________ 
//It is the process in which make api of that page and reach their.

// const express = require('express');
// const app = express();

// app.get('/home',function(req,res){ 
//    res.send('THis is get Api of HOME page');
// })
// app.post('/login',function(req,res){ 
//    res.send('THis is POST Api of LOGIN page');
// })
// app.put('/reset',function(req,res){ 
//    res.send('THis is PUT Api of RESET page');
// })
// app.delete('/remove',function(req,res){ 
//    res.send('THis is DELETE Api of DELETE page');
// })

// app.listen(8080);

// 14.                    ______________Middleware________ 
//it is function wich lies in req, and res page ex.req and loginpage or req and about page.
//it helps to we can put some restricttion in our API and one middleware is use many time in our code.

//ex : we make middleware of which api called and what user put api in above example..

// const express = require('express');
// const app = express();

 /*const checkUrl = function(req,res,next){
   console.log('the user input URL is', req.originalUrl)
   next();
}
app.use(checkUrl); */ //multiline commented part is middle ware which we make to check user input url.

// app.get('/home',function(req,res){ 
//    res.send('THis is get Api of HOME page');
//    res.end()
// })
// app.get('/login',function(req,res){ 
//    res.send('THis is POST Api of LOGIN page');
// })
// app.get('/reset',function(req,res){ 
//    res.send('THis is PUT Api of RESET page');
// })
// app.get('/remove',function(req,res){ 
//    res.send('THis is DELETE Api of DELETE page');
// })

// app.listen(8080);

// 15.                          ______Middlware with express Router_____________
//Its is used for the spcific api called to route..
//in above example the the middleware is route in all pages but in the router that only specific api called...

// const express = require('express');
// const app = express();
// const router = express.Router();

// const checkUrl = function(req,res,next){
//         console.log('the user input URL is', req.originalUrl)
//         next();
// }
// app.use('/',router);   //here chages compare to above ex and chages router instace of app.checkUrl in api function.

// router.get('/home',checkUrl,function(req,res){ 
//         res.send('THis is get Api of HOME page');
// })
// router.get('/login',checkUrl,function(req,res){ 
//         res.send('THis is POST Api of LOGIN page');
// })
// router.get('/reset',checkUrl,function(req,res){ 
//         res.send('THis is PUT Api of RESET page');
// })
// app.get('/remove',function(req,res){ 
//         res.send('THis is DELETE Api of DELETE page');
// })

// app.listen(4500);


// 16.                   _____________Open file with router with above example__________________ 

// const express = require('express');
// const app = express();
// const router = express.Router();

// const checkUrl = function(req,res,next){
//         console.log('the user input URL is', req.originalUrl)
//         next();
// }
// app.use('/',router);

// router.get('/home',checkUrl,function(req,res){ 
//         // res.send('THis is get Api of HOME page');
//         res.sendFile(__dirname +'/Home.html')   //its used for sending file we can create file and put as all api of tha page.
// })
// router.get('/login',checkUrl,function(req,res){ 
//         // res.send('THis is POST Api of LOGIN page');
// })
// router.get('/reset',checkUrl,function(req,res){ 
//         // res.send('THis is PUT Api of RESET page');
// })
// router.get('/remove',function(req,res){ 
//         // res.send('THis is DELETE Api of DELETE page');
// })

// app.listen(2750);

// 17.                         __________Template Engine(ejs)________________

//it's like html file in which we can chage content dynemically through the node/express
//many tmplage engine available like pug,ejs etc...but most popular is ejs now lern it.
//ejs: Embedded javaScript Templeate engine.

// npm i ejs               //install it
// const express = require('express');
// const app = express();

// app.set('view engine','ejs');  //its necessory to write bcz to the view engine is used ejs temlate;
//                               //when ever used the template engine it find the file in views folder so we must make to folder it put all file in.
// app.get('/profile/:name',function(req,res){
//         console.log(req.params.name)
//          data = {name:'Pathan',email:'hii@gmail.com',age:21,Edu:'B.Tech',skills:['c/c++','JS','JAVA','HTML/CSS']}
//         res.render('profile',{name:req.params.name,data:data});
       
// })

// app.listen(3000);

// 18.               _________________Above program with many pages and common hader________________

// const express = require('express');
// const app = express();

// app.set('view engine','ejs');  

// app.get('/',function(req,res){
//         res.render('Home')       
// })
// app.get('/profile',function(req,res){
//          data = {name:'Pathan',email:'hii@gmail.com',age:21,Edu:'B.Tech',skills:['c/c++','JS','JAVA','HTML/CSS']}
//         res.render('profile',{data:data});    
// })


// app.get('/about',function(req,res){
//         res.render('About')       
// })

// app.get('/contactus',function(req,res){
//         res.render('ContactUS')       
// })


// app.listen(3000);


// 19.        ________________Add Static File by the use of MiddleWare________________
//It means in node js if we want to link some file like css or other releted file then we can't directly link it.we should
//use the middleware app.use('/nameOffolder',express.static('nameOffolder')) to know that it folder name contained file open.
//if we dont use it and just link then we can see error in the browser inspect..
//so now on above example css in the nav file so we make new file and use middle ware and link in all file with that folder path.
//we make new file style.css in the assets foder and link in all file and use middleware in below see...

// const express = require('express');
// const app = express();

// app.use('/assets',express.static('assets')); //middleware IMP to link files in Nodejs.

// app.set('view engine','ejs');  
// app.get('/',function(req,res){
//         //console.log(req.query)
//         res.render('Home')       
// })
// app.get('/profile',function(req,res){
//          data = {name:'Pathan',email:'hii@gmail.com',age:21,Edu:'B.Tech',skills:['c/c++','JS','JAVA','HTML/CSS']}
//         res.render('profile',{data:data});    
// })
// app.get('/about',function(req,res){
//         res.render('About')       
// })
// app.get('/contactus',function(req,res){
//         res.render('ContactUS')       
// })
// app.listen(3000);
//so like as we can use this method to link the static file..


// 20.                 __________Get Query_______________
//Query means in simple we write in the navbar or when submit form or etc then see the data in navbar is called query..
//so how can get that form or qurey data let see...
//on Above example we maked the form in Home.ejs and their data are get in console through .query method.


// 21.                   _______ConnectDB with MongoDb Atlas___________
//we use mongoose tho connect the express and mongodb which are intermidiate freame work.
//so we make account in the Atlas
//npm i mongoose to install it
//require it and connect like as...
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://junedkhan:Junedkhan@23@cluster0.qlbhv.mongodb.net/?retryWrites=true&w=majority/intern',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.warn('DB conneted!!')})

// 22.                     ____________Model______________
// Model is predefined structher of documents.or scalers of the documents..
//Model files are always make in the model folder....below code is just for under stand it is on in the model file..
// const mongoose = require('mongoose');   //Necessory to import and intermidiate

// let userSchema = new mongoose.Schema({      //to make new schema of the documentation..
//     _id:mongoose.Schema.Types.ObjectId,      //field and datatypes
//     name:String,                         
//     age:Number,
//     Address:String
// })

// module.exports = mongoose.model('LernNodeJs',userSchema); //export it to use in other files.

// // 23.                        _____________GET data from the data_______________---

// const express = require('express');
// const mongoose = require('mongoose');
// const firstModel = require('./Models/firstModel');

// firstModel.find({},(err,data)=>{
//         if(err){console.log('Error record..');}
//         console.log(data);
// })

//24.              ______Insert data in the collection__________

// const user = new firstModel({
//         _id: new mongoose.Types.ObjectId(),
//         E_Name:'sachin',
//         E_No:77777777,
//         Dep_Id:44444,
//         join_Date:'2015-09-01',
//         end_Date:'2018-06-01'
//     })
// user.save().then((result)=>{
//    console.warn(result)
// }).catch(err=>console.log(err))
    
// 25.         ___________Form Data and query String__________________
//on above we see if we submit the form the the our data is show in the address bar which are not right,so overcome this
//issue we use post method in the form but through it we can't get directly data so we use middleware pakage known as
//body-parser which are help to get encoded data..

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');      //npm i bode-parser to install it and require
// const enCoder = bodyParser.urlencoded();    //urlencoded() it's method that help us to get post data of form esily

// app.set('view engine','ejs');
// app.use('/assets',express.static('assets'));



// app.post('/',enCoder,function(req,res){    //use body parser method as middleware in the router.
//     res.render('Home');
//     console.warn(req.body.password)
// })
// app.listen(3000)


// 26.              __________get data from db simple API understanding_______
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const emloyeesData = require('./Models/firstModel');
// mongoose.connect('mongodb://localhost:27017/assighment',(err,data)=>{
//     if(err){console.log(err)}
//     console.log('Db Conntected');
// })
// app.get('/',(req,res)=>{
//     res.end("<h1>Hello From MongoDB<\h1>")
// })
// app.get('/users',(req,res)=>{           
        
//         emloyeesData.find().then((user)=>{
//                 res.json(user);
//                 // console.log(user)
//         })      
// })
// app.listen(3000)

// 27.             _______Make post API of json Data____________
 //It's get JSON data from the body.

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');        //It's IMP to get body post type data
// const jsonParser = bodyParser.json();          //it's json parser that get the json data from the body.
// const emloyeesData = require('./Models/firstModel');
// mongoose.connect('mongodb://localhost:27017/assighment',(err,data)=>{
//     if(err){console.log(err)}
//     console.log('Db Conntected');
// })
// app.get('/',(req,res)=>{
//     res.end("<h1>Hello From MongoDB<\h1>")
// })
// app.post('/users',jsonParser,(req,res)=>{    //very Imp to put json parser as middleware...
 
//      emloyees = new emloyeesData({

//     _id: new mongoose.Types.ObjectId(),
//     E_Name: req.body.E_Name,
//     E_No: req.body.E_No,
//     Dep_Id: req.body.Dep_Id,
//     join_Date: req.body.join_Date,
//     end_Date: req.body.end_Date,
//     })

//     emloyees.save().then((result)=>{
//        res.status(201).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json(err);
//     })
        
// })
// app.listen(3000)

// 28.             _______DELETE api to delete record____________
//  //It's delete from the body.

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const emloyeesData = require('./Models/firstModel');
// mongoose.connect('mongodb://localhost:27017/assighment',(err,data)=>{
//     if(err){console.log(err)}
//     console.log('Db Conntected');
// })
// app.get('/',(req,res)=>{
//     res.end("<h1>Hello From MongoDB<\h1>")
// })
// app.delete('/users/:id',(req,res)=>{    

//          emloyeesData.deleteOne({_id:req.params.id}).then((result)=>{
//                 res.status(200).json(result)
//         })
//         .catch((err)=>{console.log(err)})
// })
// app.listen(3000)


// 29.             _______PUT api to update record____________
//  //It's updta data from the body.

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');     
// const jsonParser = bodyParser.json();    
// const emloyeesData = require('./Models/firstModel');
// mongoose.connect('mongodb://localhost:27017/assighment',(err,data)=>{
//     if(err){console.log(err)}
//     console.log('Db Conntected');
// })
// app.get('/',(req,res)=>{
//     res.end("<h1>Hello From MongoDB<\h1>")
// })
// app.put('/users/:id',jsonParser,(req,res)=>{    

//          emloyeesData.updateOne({_id:req.params.id},{$set:{
//                 E_Name: req.body.E_Name,
//                 E_No: req.body.E_No,
//                 Dep_Id: req.body.Dep_Id,
//                 join_Date: req.body.join_Date,
//                end_Date: req.body.end_Date}
//          }).then((result)=>{
//                 res.status(200).json(result)
//         })
//         .catch((err)=>{console.log(err)})

// })
// app.listen(3000)


// 30.             _______GET api to Search record____________
//  //It's search data from the db.

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');    
// const emloyeesData = require('./Models/firstModel');
// mongoose.connect('mongodb://localhost:27017/assighment',(err,data)=>{
//     if(err){console.log(err)}
//     console.log('Db Conntected');
// })

// app.get('/users/:E_Name',(req,res)=>{    
//           let regx = new RegExp(req.params.E_Name,'i')  //RegExp is use to match serach of any passed words in the data.
                                                        //i is for to make all case/incase senctive..
//          emloyeesData.find({E_Name:regx}).then((result)=>{
//                 res.status(200).json(result)
//         })
//         .catch((err)=>{console.log(err)})

// })
// app.listen(3000)

