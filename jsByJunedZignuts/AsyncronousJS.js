//                       ___________AsyncrounousJS______________

//Syncrounous means that the code is run line by line.

//Asyncrounous : In this the code is run without block other code or run with parellel.

// console.log('starting.....');

// console.log('End');

//The above code run normally line by line..it is syncounous.

//Best example of Asyncrounous is the setTimeOut()...let understand

// console.log('start')
// setTimeout(()=>{      //if we run the code first the start and end cosole log is run after it
//                  //run bcx it is Asyncronous of browsers Api function.
//     console.log('i am from SetTimeOut after 3sec')
// },3000)

// console.log('End');


//if we want to check the how the Asyncronous function work then visit and run above code
//http://latentflip.com/loupe

//setTimeOut,Evenet listner etc are Asyncrounous bcz they called when they invoke or called.

// console.log('start')
// setTimeout(()=>{ //if we write O ms in the time still they run after synncrounous code bcz they puhed of web apis and call stach quer run other code then it run so...
//     console.log('i am from SetTimeOut after 3sec')
// },0)
// console.log('End');

//Note: In the setTimeOut function the time is not accurate it may be delay note that.

