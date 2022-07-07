const path = require("path")

// console.log(path.basename("../practiceNode"))
// console.log(__filename)
// console.log(__dirname)
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

// const newPath = path.join(__dirname,"newFolder","text.txt");
// console.log(path.dirname(newPath))

//fs module
const fs = require("fs");

// fs.mkdir(path.join(__dirname,"/newFolder"),(err)=>{
//     if(err){
//         console.log(err)    
//     }
//     console.log("folder created!!")
// })

// fs.writeFile(path.join(__dirname,"newFolder","/text.txt"),"This is my content",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("content added!!")
// })

// fs.appendFile(path.join(__dirname,"newFolder","/text.txt"),"This is my content\n",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("content added!!")
// })

// fs.readFile(path.join(__dirname,"newFolder","text.txt"),(err,data)=>{
//     if(err){
//         throw err;
//     }
//     let humanReadableData = data.toString()
//     console.log(humanReadableData)
// })

// fs.readFile(path.join(__dirname,"newFolder","text.txt"),"utf-8",(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

const os = require("os");

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.totalmem())

//Event modulue
const Emitter = require("events");
const { clearScreenDown } = require("readline");
const myEmitter = new Emitter();

// myEmitter.on("onclick",(data)=>{
//     console.log(`hello bhai${data}`);
// })

// myEmitter.on("onclick",(data)=>{
//     console.log(`hello bhai....${data}`);
// })

// myEmitter.on("onclick",(data)=>{
//     console.log(`hello bhai..........${data}`);
// })
 
// myEmitter.emit("onclick","Junedkhan")

// class Learn extends Emitter{
//     register(user){
//         console.log(`${user} Welcome!!`)
//         this.emit("email",user);
//     }
// }
// let obj = new Learn()

// obj.on("email",(user)=>{
//     console.log("welcome fist")
// })
// obj.register("Mr.pathan")


const http = require('http')

// const app = http.createServer((req,res)=>{
//     // res.end("THis is server");
//     if(req.url === "/"){
    
//          console.log(req.url)
//          res.write("This is root page!!")
//          res.end()
         
//         }else if(req.url === "/about"){
//             console.log(req.url);
//             res.write("This is about page");
//             res.end()

//     }
// })

// app.listen(3000,(err,succ)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Server Established!!")
// })

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"myUser",
//     password:"Admin@123",
//     database:"dbTask"
// })

// connection.connect(function(err){
//     if(err){
//         console.log(err)
//     }
//     connection.query("SELECT * FROM USER",(err,data)=>{
//         if (err){
//            console.log(err)
//         } 
        
//     })
// })

const express = require("express");
const app = express()

app.set("view engine","ejs");

// const checkUrl = function(req,res,next){
//     console.log('the user input URL is', req.originalUrl)
//     next();
//  }
//  app.use(checkUrl);

app.get("/",(req,res)=>{
    console.log(req.url)
    // res.end("This is from express");
    res.render("first")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is Estabished by expresss");
})

