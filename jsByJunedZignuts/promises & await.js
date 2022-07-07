                          //    _________________Promises______________________  

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
// return reject('Error while registering..');     //if we want to pass reject 
            console.log("Register Successfully..");
            resolve('Successfull');
        },2000)
    })
}
function welcomeMail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("welcome mailed send Successfully..");
            resolve();
            },3000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login Successfully..");
            resolve();
        },2000)
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getData Successfully..");
            resolve();
        },4000)
    })
}
function displayData(){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displayData Successfully..");
        },1000)
    })
}

/* // register(function(){          //here it is by the callback and below code of promises
                                 //see the diffrent how relevent and good manner.
   
//     welcomeMail(function(){

//         login(function(){

//             getData(function(){

//                 displayData();
//             });

//         });
//     });
// });       */

// register().then(welcomeMail).then(login).then(getData).then(displayData)
// .catch((err)=>{                         
//      console.log('Error:',err)
// });

//if we want to apply reject logic then use reject in declration passed message and cath in 
// above cathc bloack

//But it is also not convint way to pass reject function...instance of it we use await function


async function lernAwait(){
  try{
      const getedData =  await register();
      await welcomeMail();
      await login();
      await getData();
      await displayData();
      console.log(getedData);
    }catch(err){
        console.log(err)
        throw new Error()
    }
}
 lernAwait().then(()=>{console.log('All set!')})
//  .catch((err)=>{ console.log('Error:',err)}); //it is way to cath error OR other way try cathc above


//await :It is ensure that the the function first called completely after other function will run.
 //If we want to use await then first we make that function by the async keyword.
//If we use async key word that function bydefault return promise we no need to write like above
//return new prom.... so it is also return then so use then pass funtion to display something.