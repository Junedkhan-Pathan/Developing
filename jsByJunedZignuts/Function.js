//callback function concept: It is a function which has parameter as function that is called CB.
//in below example the fuctino take two arguements and chekc second arg if it is fuction thene it
//call to that function and tralnslate text  in to first char in uppper else translate word in uppercase.

// function format(text,formatCb){
  
//     return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();

// }

// let cbfunc = format('junedkhan',function(text){
//     return text.charAt(0).toUpperCase() + text.slice(1);   
// })

// console.log(cbfunc)


//_______________________IIFE(Immedietly invoke functino  exprssion)
//It is is function which is invoke(call) automatically..

//if wr try just like as it will give error;
// function setup(){
//     console.log('setup done!!');
// }();
        //So we wrap funtion in the braket so called IIFE.like as...
// (function setup(){
//     console.log('setup done!!');
// })();       // Alse we can remove function name.

//               ______________Arrow Function_____________
//it is function in which the function key word braces name of function are omitted.

// let arrFunc = (user) => console.log(`Hiii...${user}`);
// arrFunc('juned');
