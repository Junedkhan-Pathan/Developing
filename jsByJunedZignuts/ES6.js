//                        ___________ES6 AKA Ecmascript 2015_______________

//                    _________let,const  instace of var_________
// let const
// var productName = 'Laptop';
// code polute

// function register() {
//     var username = 'rakesh';
//     var password = 'secret';
// }

// console.log(username);

// let product = 'Laptop';

// console.log(product);
// const product = 'Laptop';
// product = 'Mobile';
// let age = 20; // undefined
// console.log(age);

// const age = {
//     years: 19,
// };
// age = 20;

// console.log(age);
//                          ____________Arrow functions___________
// function greet() {
//     console.log('Good morning');
// }

// const addition = a => console.log(a + a);
// addition(5);

// console.log(this);

// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();

// const myButton = document.querySelector('#myButton');

// const shop = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             // console.log(this);
//             console.log('I spent ' + this.price);
//         });
//     },
// };
// shop.buy();

//                 _____________Template literals AKA backticks___________________

// const firstName = 'Rakesh';
// const lastName = 'K';

// console.log(firstName + ' ' + lastName);

// hello
// how are you

// const message = 'hello \n' + 'how are you';
// const name = 'Rakesh';
// const message = `hello ${5 + 6}
// how are you
// `;
// console.log(message);

//                         __________Enhanced object literals____________
// computed propery keys
// Method defination shorthand
// Property shorthand

// const accessToken = 'dsjfhkadhskfhk';
// const refreshToken = 'adkjfljdlffdd';

// const user = {
//     accessToken,
//     refreshToken,
// };

// console.log(user);

//                      ____________Destructuring____________
//It is the reduce to accessing proerty by the '.' ,instace of '.' we assign that object to 
//new veriable object and use that variable direclly..

// const user = {
//     name: 'John Doe',
//     age: 30,
// };
//console.log(user.name)    //we use like as erliaer but now we can do as...

// const { name: fullName, age } = user; //also can do type alias to change it name

// console.log(fullName);
// console.log(user.name);
 //             ____Destructuring with array______

// const data = ['Rakesh', 30, 'Engineer']; //we make array 

// const [name, age, profession] = data; //And assigh it index to with name by destructaring 

// console.log(name)          //Now we can access index  by the name of index like as..
// console.log(profession)

// const [count, setCount] = useState(); //best example used in Reac like as

//                  _______________Default Parameters_____________

//It is way to give by default value to variable..
// const register = (name, password, image = 'test.png') => {
//     // const img = image || 'test.png';   //we used erlier when it DP not come.
//     console.log(name, password, image);
// };

// register('Rakesh', 'secret', 'photo.png');

//                          ____________Spread(...)________________
//It is used for the copy of array,object property to new array,object using three dot(...)
 //like as

// const languages = ['c', 'c++', 'javascript'];     
// let newLanguages = [...languages, 'typescript'];
//    we can add value in start,end indext etc like as..
//  newLanguages = ['C#',...languages, 'typescript'];
//  console.log(newLanguages)
            //  ------------Used in Object----------
//
// const settings = {
//     volumn: 10,
//     brightness: 80,
// };

// const newSettings = { ...settings, volumn: 20 };//add object and with chaged value.
//and  as above array we can add new property in the new object through in curely brackets.

// console.log(newSettings);

//                      ____________Rest(...)_____________

//It is mainly use or it is for the function... 

// const addItems = (...items) => {   //we can use when we not khow how many paramerters are came.
//     console.log(items);
// };
// addItems(1,3,4,2,6,5,7,8,9,0);

//                              ___________For of loop____________
//It is mainly used in iterative like  Array, string, Object, set, map to iterate their value,
//property,etc..
             //-----with array---
// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//     console.log(num);
// }
            //---with string-----
// const language = 'Javascript';

// for (const char of language) {
//     console.log(char);
// }
         //------with object------//    
// const person = {
//     name: 'Rakesh',
//     city: 'Moscow',
//     brand: 'apple',
// };
   //Note: we can not use for of loop directly in obejct OR we can use for in loop..
   //But if we want to use then we can use like as... 
// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

//                      _____________Promises_________________

// function login(cb) {
//     setTimeout(() => {
//         console.log('Login..');
//         cb();
//     }, 0);
// }

// login(() => {
//     // async

//     console.log('Redirecting');
// });

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login...');
//             reject();
//         }, 0);
//     });
// }

// login()
//     .then(() => {
//         console.log('Redirecting..');
//     })
//     .catch((err) => {
//         console.log('Error...');
//     });


//                      _____________find (Array methods)_____________

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.find((user) => {
//     return user.name === 'John';
// });

// console.log(user);

//                       _________________findIndex_________________

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.findIndex((user) => {
//     return user.name === 'Jane';
// });

// console.log(user);

//                             ____________Set_______________

//Set: It is store the unique value.

// const uniqueNumbers = new Set();

// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);
// console.log(uniqueNumbers.size());  // for know about size
// console.log(uniqueNumbers.has(10)); //check contain that value return boolean.
            //    -------Actual use of Set---------- 
// const numbers = [4, 5, 6, 4, 7, 6];  //Array in which duplicates value
// const uniqueNumbers = new Set(numbers); //Make set for unique value from array
// console.log(Array.from(uniqueNumbers)); //get new array from set


//                       ____________Map(Hashtables)_____________
//It is similar to obj which conatain key and value in pair.
//It most usely for lookup(fast serching) complexity is O(1)..
//Map is ensure that it give data in oreder as it inserted while obj can't.
//In map we find size easily while in obj in can't.

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');

// console.log(urls.get('production'));
// O(1)

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };

// for (const [key, value] of urls) {  //in obj we can't this loop like as
//     console.log(key, value);
// }

// console.log(urls.size);


//                          __________________classes_______________

//In js before classes we used function as like..

// function Person(name) {
//     this.name = name;
// }

// const rakesh = new Person('Rakesh');
// const john = new Person('John');
// rakesh.name = 'Coders Gyan';
// console.log(john); 

            //But in ES6 the feauther added classes..
//It is teplate or Blueprint for js objects.
//Always keep method in that is constructor()
// class Person {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Good morning');
//     }
// }
        // -----Inheritance------
// class GreatPerson extends Person {
//     attitude = 'cool';

//     greet() {
//         console.log('Good Evening');
//     }
// }

// // const rakesh = new Person('Rakesh');
// const john = new GreatPerson('Johny');
// // john.name = 'Joy';
// console.log(john.greet());

//              _________________ESM( ES6 modules )_______________
//Module means one type of file which conatain specific code/logic to use another files.

// import { libName as myLibName } from './lib.js';
// import myLogin from './lib.js';
// myLogin();
// console.log(myLibName);