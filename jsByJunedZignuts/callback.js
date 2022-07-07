//                     _________________Callback()__________________
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// generally the function is invoke like as they called means line by line as called..

// if we want like as follow code so we so we can write as.. 
// 1. Register
// 2. welcome Mail 
// 3.login 
// 4.get user data 
// 5. display data 
// so we just write function line by line and call as like....But it is not proper bcoz in network
// it will be not conveint way so overcome the problem we use the setTimeOut...
// But also in the may be some function take time and it after function will call which not accepteble. 
// so overcome the overall issue we use callback..

// CallBack : That is define that the first call the called function after other fucntion are 
// invoke as you arranged and coded! even after other function take time..


// Therfore , we use the Ascyncronous the setTimeOut method to overcome the issue...

// function register(callback){
//     setTimeout(()=>{
//         console.log("Register Successfully..");
//         callback();
//     },2000)
// }
// function welcomeMail(callback){
//     setTimeout(()=>{
//         console.log("welcome mailed send Successfully..");
//         callback();
//     },3000)
// }
// function login(callback){
//     setTimeout(()=>{
//         console.log("login Successfully..");
//         callback();
//     },2000)
// }
// function getData(callback){
//     setTimeout(()=>{
//         console.log("getData Successfully..");
//         callback();
//     },4000)
// }
// function displayData(callback){
//     setTimeout(()=>{
//         console.log("displayData Successfully..");
//     },1000)
// }

// register(function(){
   
//     welcomeMail(function(){

//         login(function(){

//             getData(function(){

//                 displayData();
//             });

//         });
//     });
// });

// Like as the we used callback to over come the above issues which relevent to time and orderd
// but still in the callback function as show above many functions are invoked and it may be 
// very dirty...so above resolve the probelem and optimize the code new hero entry is come  that 
// is promises...lets lern..

                
    
