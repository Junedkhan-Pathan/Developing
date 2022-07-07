// Estimated Time:  3  hours
// Create a NodeJS server and perform the following operations in NodeJS.
// Create a file with the name demo.txt and write some contents to the file using NodeJS file module.
// Read the content of created `demo.txt` file. Take an example: a file name is demo.txt and the content `Node.js is an open source server environment.`.	
// Update the created `demo.txt`  file’s content of the file in NodeJs. For example, Append the `Node.js allows you to run JavaScript on the server.` in the file.
// Rename the created file name. For example, `demo.txt` to `final-demo.txt`.
// Delete the created `demo.txt` file using NodeJS file module.

const http = require('http');
const fs = require('fs');

let app = http.createServer((req,res)=>{
    
    res.write('Hello this is from NODE server!!')
    console.log('NodeJS server Established!!');  

})
 //Creating file and add content...
//  fs.writeFile('demo.txt','Hii...This new file created through the NodeModules',(err)=>{
//     if(err){
//         console.log('Something went wrong');
//     }
//     console.log('FILE crated Successfully!!')
//  })

 //Read file through the fs modules
 
//  fs.readFile('demo.txt',(err,data)=>{
//     if(err){
//         console.log('ERROR when file open');
//     }
//     console.log(data.toString());
//  })
// content update...
// fs.appendFile('demo.txt','Node.js allows you to run JavaScript on the server.\n',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Data is updated Successfully!!')
// })

//Rename file name..

// fs.rename('demo.txt','final-demo.txt',(err,sucess)=>{
//        if(err){
//         console.log('Error while Renamed!!',err);
//        }else{
    //        console.log('FILE name Changed Successfully!!');

//         }
// })

//Delete file..

// fs.unlink('./final-demo.txt',(err)=>{
//     if(err){
//         console.warn(err);
//     }else{

//         console.log('Deleted Successfully!!')
//     }
// })

let PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server established on ${PORT}`);
})

