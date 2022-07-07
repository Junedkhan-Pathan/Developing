//                      __________classes___________
//class is made by the key word class and also we can masde by expression like below..

// let BankAccount = class{            //maded by class expression like function
    
class BankAccount{                     //Maded by class 
//As before maded BankAccunt by Function constructor we maded by class now
    
       customerName;          //It is property of classes
       accountNumber;
       balance;
            
        constructor(customerName,balance=0){       //it is compolsory to made in class 

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

const account1 = new BankAccount('junedkhan',1000);
console.log(account1)

const account2 = new BankAccount('Faizan',4000);
console.log(account2)

account1.deposit(50000);
console.log(account1.balance)

account2.withdraw(3000);
console.log(account2.balance)
//So we can use class instace of construcor function easily and reliable..
//In class the if we make class object on top of class then it will give error whil funciton 
//will not give bcz class not doing hoistin while function do.
