const arr = ['java','python','javascript']
// console.log(arr[2]);
// console.log(arr[1]);

// arr.push('C#');  //For add New elements at end of Index in array
// console.log(arr)

// arr.unshift('php')  //For add New elements at start of Index means 0th index in array
// console.log(arr)

// arr.pop()          //For remove  elements from end of index
// console.log(arr)

// arr.shift()          //For remove  elements from start of index
// console.log(arr)

// let  products = [
//      {
//         Prodeuct:'Maggi',
//         Price : 50
//     },
     
//       {
//         Prodeuct:'souce',
//         Price : 80
//     },
     
//       {
//         Prodeuct:'Pasta',
//         Price : 70
//     },
     
//       {
//         Prodeuct:'Noodels',
//         Price : 90
//     },
// ]
// console.log(products[1].Price)      //Accessing the array object propery
// console.log(products[1].Prodeuct) 

//let discount = 10;
// for(let i = 0;i<arr.length;i++ ){
//     products[i].Price -= discount;
// }
                   // 0r  we can use for each loop
// products.forEach((item)=>{
//     item.Price -= discount;
// })
         //or we can use for of loop

// for(item of products){
//     item.Price -= discount;
// }
//  console.log(products)

//             _____________________Fileter________
//In this method the filter make new aarray and which we want to filter.

// let priceFileter = products.filter((item)=>{
 
//     if (item.Price >= 70){
//         return true;
//     }
//     return false;

// })
           //Or we can write above code in just on line.
// let priceFileter = products.filter((item)=>item.Price>=70)
//  console.log(priceFileter)

//______________________________MAP_________________________
    //Map : It can be return new array with our maded logic like as... 
// let students = [
//     {
//         fName:'Junedkhan',
//         lName:'Pathan'
//     },
//     {
//         fName:'Jay',
//         lName:'Patel'
//     },
//     {
//         fName:'Meet',
//         lName:'Somani'
//     },
// ];

// let fullName = students.map((name)=>{
//     return `${name.fName} ${name.lName}`;
// })
// console.log(fullName);

//         _________________Reduce______________

let  products = [
    {
       Prodeuct:'Maggi',
       Price : 50
   },
    
     {
       Prodeuct:'souce',
       Price : 80
   },
    
     {
       Prodeuct:'Pasta',
       Price : 70
   },
    
     {
       Prodeuct:'Noodels',
       Price : 90
   },
]
//if we want to get price of total item we like as..
//  let total = 0;
// let sum = products.forEach((item)=>{
//       total += item.Price
// })

//So we can write above code by using reduce method. 
// let total = products.reduce((acc,item)=>{          //here acc is accumulator we can give any name
//                                             //instance of it.it just same as above total variable.
//           acc += item.Price;
//           return acc
// },0)
// console.log(total)

