const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

//EJS template engines
app.set('view engine','ejs');
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//Server Connection
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Established at port number:${PORT}`);
})

//My sql Connection
let connection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'Admin@123',
    database:'firstTask'
})
connection.connect((err)=>{
    if(err){
        console.log('DB Not Connceted!!');
    }
    console.log('DB Succesfully Connceted!!');
})

//Listing data..
app.get('/',(req,res)=>{
    res.render('index');    
})
app.get('/list',(req,res)=>{
    
    connection.query('SELECT * FROM Courses',(err,data)=>{
        if(err){
            console.log(err);
        }
       
            res.render('list',{lang:data})
        
    })
})
app.get('/insert',(req,res)=>{
    res.render('insert')
})
app.post('/insert',(req,res)=>{
     courseName = req.body.name,
     courseDuration = req.body.duration,
     coursePrice = req.body.price
 
     let myquery = `INSERT INTO Courses(courseName,courseDuration,coursePrice)VALUES('${courseName}','${courseDuration}','${coursePrice}')`

     connection.query(myquery,(err,succ)=>{
        if(err){
            console.log(err)
        }
        // res.send("<h3>Data Added Successfully!!</h3>")
        res.redirect('/update')
     })
  
})

//updates data..
app.get('/update',(req,res)=>{ 
    connection.query('SELECT * FROM Courses',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.render('update',{lang:data}) 
    })
})
app.get('/update/:id',(req,res)=>{
    id = req.params.id

    let updteQuery = `SELECT * FROM Courses WHERE id=${id}`

    connection.query(updteQuery,(err,succ)=>{
        if(err){
            console.log(err);
        }
      res.render('updateFile',{newData : succ})
    })
    
    
})
app.post('/updates',(req,res)=>{
    newName = req.body.newName,
    newDuration = req.body.newDuration,
    newPrice = req.body.newPrice
    let newQuery = `UPDATE Courses SET courseName = '${newName}',courseDuration=${newDuration},coursePrice=${newPrice} WHERE id=${id}`
   connection.query(newQuery,(err,succ)=>{
      if(err){
          console.log(err)
      }
    //   res.send("<h3>Data Updated Successfully!!</h3>")   
      res.redirect('/update')
   })

})


//Delete data...
app.get('/delete/:id',(req,res)=>{
      
      deleteId = req.params.id

      let deleteQuery = `DELETE FROM Courses WHERE id = ${deleteId}`
 
      connection.query(deleteQuery,(err,succ)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/update')
      })
     
})

