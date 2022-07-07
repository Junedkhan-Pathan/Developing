                        // __________OOPs(Object oriented programmings)_________ 
//It is one type paradim means in symple word programming style of code.
//Many types of programming style like procedural,functional...in procedural code are write line
//by line like c language,and fuctional in code are write in pure function which not affect other
//not mute outside of code.
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

// const rakeshAccount = new BankAccount('Rakesh K', 1000);
// const johnAccount = new BankAccount('John Doe');
// rakeshAccount.deposit(5000);
// johnAccount.deposit(1000);
// rakeshAccount.withdraw(2000);

// console.log(rakeshAccount, johnAccount);

// ============================
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

const withDrowForm = document.querySelector('#withDrowForm');
const accountNumber1 = document.querySelector('#accountNumber1');
const withDrowAmount = document.querySelector('#withDrowAmount');


accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let account = accounts.find((account) => account.accountNumber === +accountNumber.value);
        account.deposit(+amount.value)
        console.log(accounts);
});

withDrowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber1.value);
         account.withdraw(+withDrowAmount.value)
        console.log(accounts);
});

//=========================================================================================
                //   ___________Prototype______________________ 
//This method maded by prototype refer Prototype.js 

BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };