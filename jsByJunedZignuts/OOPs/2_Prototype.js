//                          ________Prototype________

//It is one type of bydefalult empty constructor of maded fuction or class object.
//we use prototype to reduce the object method memeory which are in all object.
//It is chain of constructor..

//If we use previous example of Bank then in the deposit and withdrow method are see in all 
//object which not good bcz it take memory and down the speed and unneccesory thing to show
//and use all object...so we made it to prototype property to all object can use without
//memory allocatin of it method.. Like as..


function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // };

    this.withdraw = (withDrowAmount) => {
        this.balance -= withDrowAmount;
    };
}

const prototypeLern = new BankAccount()

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

//See this diffrent in "1_ConstructorFunction"... In which the deposit method are in the 
//BankAccount constructor while withdraw not prototype method which are take memory in 
//every object while deposit method take only onetime...
//we can see deposit method in constructor dropdown bcz its prototype of BankAccount while 
//withDrow in every object...
