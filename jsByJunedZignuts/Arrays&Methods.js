// const arr = ['java','python','javascript']
// console.log(arr[2]);
// console.log(arr[1]);

                    // _______________push()______________ 
// arr.push('C#');  //For add New elements at end of Index in array
// console.log(arr)

                   // ________________unshift()_______________ 
// arr.unshift('php')  //For add New elements at start of Index means 0th index in array
// console.log(arr)

//                   ________________pop()_____________________
// arr.pop()          //For remove  elements from end of index
// console.log(arr)javascript with codersgyan

                    //  ________________shift()__________________ 
// arr.shift()          //For remove  elements from start of index
// console.log(arr)

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

//             _____________________Fileter_______________
//In this method the filter make new aarray and which we want to filter.

let priceFileter = products.filter((item)=>{
 
    if (item.Price >= 70){
        return true;
    }
    return false;

})
           //Or we can write above code in just on line.
// let priceFileter = products.filter((item)=>item.Price>=70)
 console.log(priceFileter)

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

// let  products = [
//     {
//        Prodeuct:'Maggi',
//        Price : 50
//    },
    
//      {
//        Prodeuct:'souce',
//        Price : 80
//    },
    
//      {
//        Prodeuct:'Pasta',
//        Price : 70
//    },
    
//      {
//        Prodeuct:'Noodels',
//        Price : 90
//    },
// ]
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

//                 ___________________indexof_____________
//indexOf :It's used for find that index of word,number etc but actul use of like as..
// let usersId = [2,5,9,6];

// let users = {
//   name:'Junedkhan',
//   userId : 2
// }
// let isAdmin = usersId.indexOf(users.userId) > -1 //here we chech that in userID contain this users userid
//                                            //by the indexOf
// console.log(isAdmin)

              // ____________________________includes_______________________________
// includes: it is used for to check the specific contain something like as....
// same as above indexOf example we can write that logic by the includes easyly.......

//let isAdmin = usersId.includes(users.userId)
                  //  or
// console.log(usersId.includes(users.userId))

//                    _______________find()______________
// // find(): It is used to find that element by id,Name,etc like as... 
// let  products = [
//   {
//      Prodeuct:'Maggi',
//      P_id:3,
//      Price : 50
//     },
    
//     {
//       Prodeuct:'souce',
//       P_id:6,
//       Price : 80
//  },
//   {
//       Prodeuct:'Noodels',
//       P_id:5,
//       Price : 90
//  },
// ]

// let findItem = products.find((item)=>{return /* item.P_id == 3 */ item.Prodeuct==='souce'})
// console.log(findItem)

//                 _________________sort()______________

// const arr1 = ['juned','keyur','jigar','rahul','tanmay'];
// let arrsort = arr1.sort();  //it sort the array in alphabetical order.
// console.log(arrsort)

//               ___________________splice()____________________
// splice():It is used for remove elements from sepcific index to many elements..  
// const arr2 = ['juned','keyur','jigar','rahul','tanmay'];
// console.log(arr2)
// let remArr = arr2.splice(1,2)  //it remove elements index 1 to 2 elements 
// console.log(arr2)
