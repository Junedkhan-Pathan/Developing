const express = require('express');
const app = express();
const router = require('./routes/index');
const errorHandler = require("./middlewares/errorHandler");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/RESTApi",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }
    console.log("DB connected!!");
})

app.use(express.json());


app.use('/api',router)
app.use(errorHandler)

 const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server listning on ${PORT}`);
})