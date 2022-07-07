const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const users = require('./Models/jwtModel');
const mongoose = require('mongoose');
const crypto =require('crypto');         //it is for the password enrypting
const key = 'password';            //it neccessory to give the key
const algorithm = 'aes256';          //the name of algorithm to apply..

//JWT  genration
let jwt = require('jsonwebtoken');  //npm i jsonwebtoken to install it and require
jwtKey = 'jwt';

mongoose.connect('mongodb://localhost:27017/login',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log('Db Connected!!');
})

app.get('/',(req,res)=>{

    res.end('Hello this is jwt file')
}) 
app.post('/signUp',jsonParser,(req,res)=>{

    let cipher = crypto.createCipher(algorithm,key)      //procees of password encrypting 
    let encryptPassword = cipher.update(req.body.password,'utf8','hex') + cipher.final('hex'); //encrypting..

    console.log(encryptPassword)

    newUser = new users({
     
    _id: mongoose.Types.ObjectId(),
     userName : req.body.userName,
     add :req.body.add,
     email : req.body.email,
     password :encryptPassword

    })
    
    newUser.save().then((result)=>{
      jwt.sign({result},jwtKey,{expiresIn:'300s'},(err,data)=>{
         res.status(201).json({token})
       
      })
    })
    .catch((err)=>console.warn(err)) 
     
})
app.listen(3000);
