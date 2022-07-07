// let color = require("cli-color");       //import cli-color package for color text
// console.log(color.bgBlueBright("Junedkhan pathan"));

// const temp = require('./temp')       //import local module which we create
// temp.login("zignuts");            // Accessing that file code
// temp.reg("Junedkhan");

const path = require('path')
console.log(path.resolve())
// console.log(__filename);              //Return the wholw file path
// console.log(path.dirname(__filename));   // It return directery path
// console.log(path.basename(__filename));     //It return just base file that is just file name
// console.log(path.extname(__filename));     //to know their extension name
 
// Parse 
console.log(path.parse(__filename));   //it Return the inforamation about file in form OBJ.
 
//join  - it is used for the join the path,folder,and file to one path. like as
// console.log(path.join(__dirname,'newFlderOrPath','FileName.js'));

const fs = require('fs')

//For create the foler : 
// fs.mkdir(path.join(__dirname,'/flderName'),(err)=>{
//     if(err){
//         console.log(err)     //err : to find about type of error OR we use something w.w.
//         return
//     }
//     console.log('Folder created Succesfully and name is',path.basename("/fldername"))
// })

// For Crating the FILE:
// fs.writeFile(path.join(__dirname,'flderName','test.txt'),"Now we are learing File creating in fs",
// (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("NEW FILE Created and content added succesfully..");
// })  //If we run then again& again nothig will change bcz it just erase old data and add new...

// overcome this we use append instance of writeFile... like as..

// fs.appendFile(path.join(__dirname,'flderName','test.txt'),"Now data is Append instant of erase old data\n",(err)=>{
//     if(err){
//         // console.log(err)
//         throw err;
//         return
//     }
//     console.log("Now data are uppend instand of erase old data");
// })

//Read file

// fs.readFile(path.join(__dirname,'flderName','test.txt'),(err,data) =>{
//   if(err){
//       throw err;
//       return
//   }  
// //     let humanReadableData = Buffer.from(data)  
//     //we doing it for string data.if we not do then it give buffer data an .toString is convert it into string.
//    console.log(data.toString())
// })
//         //  OR just add one parameter " 'utf-8' " to get proper dadta like as 

        // fs.readFile(path.join(__dirname,'flderName','test.txt'),'utf-8',(err,data) =>{
        //     if(err){
        //         throw err;
        //         return
        //     }  
        //      console.log(data)
        //   })

//OS Module:

const os = require('os');

// console.log(os.type());     //For know Name of OS.
// console.log(os.platform());     //For know Name of Platform. Both are same.
// console.log(os.arch())          //For know about CPU architecthure
// console.log(os.totalmem())          //For know about total memory
// console.log(os.freemem())          //For know about free memory
// console.log(os.cpus())          //For know about CPU full details
// console.log(os.uptime())          //For know about CPU start time

//Event Module :
// const Emitter = require('events');  //This module is first of all it's class so we make it obj 
//                                  //to access its property and methods
//  const myEmitter = new Emitter();        //we make its instance to access ...

// myEmitter.on('anyNameYouWant',(data)=>{
//         console.log(`Hii..${data} Welcome to this events modules`)
// })
// myEmitter.emit('anyNameYouWant',"sharukh");

// class learn extends Emitter{
//      register(U_name){
//        console.log(`${U_name} Welcome you riched here...`)
//        this.emit('email',U_name)
//      }
// }
// const learnObj = new learn()

// learnObj.on('email',(data)=>{
//         console.log(`${data}...This First Register Email`)
// })
// learnObj.on('email',(data)=>{
//         console.log(`${data}...This Second Verify Email`)
// })
// learnObj.on('email',(data)=>{
//         console.log(`${data}...This Third  Welcome Email`)
// })

// learnObj.register("Mr.Pathan")

//HTTP Module : 

const http = require('http')


const app = http.createServer((req,res) =>{

       console.log(req.url)
        res.writeHead(200,{
                'Content-Type':'text/html '
        })

        if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
                  
              if(err){
                     throw err;
              }
              res.end(content);
      })
        }else if(req.url === '/about'){
              
          fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
                
                        console.log(req.url);    
                 if(err){
                        throw err;
                 }
                 res.end(content);
         })

        }
let  filePath = path.join(__dirname,'public',req.url == '/' ? 'index.html':req.url)

let contentType = 'text/html';
const ext = path.extname(filePath)
 
if(!ext) {
        filePath += '.html';
}

   
  switch(ext){
        
        case '.css':
                contentType = 'text/css';
                break

        case '.js':
                contentType = 'text/javascript';
                break

        default :
                contentType = 'text/html'
        }
  

      fs.readFile(filePath,(err,content)=>{

              if(err){
                //       res.write("SMW");
                fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                        if(err){
                                res.writeHead(500)
                                res.end('Something went wrong.')
                                

                        }else{
                                res.writeHead(404,{
                                 'Content-Type': contentType
                                        })

                        res.end(data)
                        }
                        
                })
              }else{
                res.writeHead(200,{
                        'Content-Type': contentType
                })
                res.end(content);
                
        }
      }) 

   
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`Server Established on port number ${PORT}`);
})
