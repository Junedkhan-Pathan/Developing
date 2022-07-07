//                             _______Function Cunstructer Inheritance___________

//The inheritance is the inherit the property,method from the parent class
//It Main purpose that is DRY(Do Not Repeat Your self)


//-------------First we lear inheritance in constructor functions----------------
// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;                             
// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function(withDrowAmount){
//      this.balance -= withDrowAmount
// }

//Now,If we want to inherit the Bank property method to reduce the repet code we link that 
//constructer function with parent CF like as..


// function CurrentAccount(customerName, balance = 0) {
//     // this.customerName = customerName;
//     // this.accountNumber = Date.now();
//     // this.balance = balance;
//     BankAccount.call(this,customerName,balance) //for this now that Parent property will access.
//     this.transferLimit = 100000;                            
// }
// CurrentAccount.prototype = Object.create(BankAccount.prototype) //with the help of it we
// //now access method of parent method.we can see in the prortotype in prototype,basically 
// //prototype is one type of chain system.

// CurrentAccount.prototype.loan = function(amount){
//    console.log('Taking loan of..',amount);
// }

// CurrentAccount.prototype.transFer = function(amount){
//     console.log('Transfer More amount',amount)    
// }

// function SavingAccount(customerName, balance = 0) {
//     // this.customerName = customerName;
//     // this.accountNumber = Date.now();
//     // this.balance = balance;
//     BankAccount.call(this,customerName,balance) //Also same as CurrentAccount
//     this.transferLimit = 30000;                            
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype) //same as CurrentAccount
// SavingAccount.prototype.goldLoan = function(amount){
//    console.log('Taking loan of..',amount);
// }
// const obj1 = new CurrentAccount('junedkhan',1000);
// console.log(obj1)
// console.log(obj1.balance)
// obj1.deposit(4000);
// console.log(obj1.balance) //Now we see the how can we use the method of parent CF.

// =============================================================================================
                        //  ____________Class Inheritance________________
//As we know that the constructor function is now right way to bcz now we have classes in js..
//But we should know about that how erlier work when we have not class so we have lerned above it.

//Now we learn Acthual INHERITANCE in class...Let's go.....

class BankAccount{          

           customerName;
           accountNumber;          
           balance;
                
            constructor(customerName,balance=0){     
    
                this.customerName = customerName;
                this.accountNumber = Date.now();
                this.balance = balance;
            }
    
        deposit(amount) {
            this.balance += amount;
        };
    
        withdraw(withDrowAmount){
            this.balance -= withDrowAmount;
        };
    }
    
    class SavingAccount extends BankAccount{
         
        AmountTransferLimit = 30000;
        
         constructor(customerName,balance=0){
             super(customerName,balance);
         }

         goldLoan(amount){
             console.log('You can take gold loan..',amount);
         }

    }
    class CurrentAccount extends BankAccount{             //extends key word used for the make chiled of parent. 
         
        AmountTransferLimit = 100000;
      
         constructor(customerName,balance=0){
            super(customerName,balance);     //Here,In class we use the 'super()' keyword to use parent property
         }

         carLoan(amount){
             console.log('You can take gold loan..',amount);
         }

    }

    const classObj = new CurrentAccount('junedkhan',5000); // we can easily acces parent property
    console.log(classObj)
    classObj.deposit(5000); //also easily acces the parent property
    console.log(classObj.balance)