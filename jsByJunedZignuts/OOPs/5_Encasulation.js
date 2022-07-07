//                          ___________Encapsulation_______________

//Encasulation is used for the hide the private data and method to denied permisson
 // to accessing the properthy or method from out side of the class.

 class BankAccount{          

    customerName;
    accountNumber;          
    #balance;
         
  constructor(customerName,balance=0){                                                                  

        this.customerName = customerName; 
         this.accountNumber = Date.now();
         this.#balance = balance;
     }
   
        // getBalance(){
        //     return this.#balance;
    
        // } 
        // setBalance(amount){ 

        //     this.#balance = amount;
    
        // }
    // NOTE: the above method is used erlier when js not introduce private property security or wecan give any name bcz it's not
    //by defalut method.
  
    //now we have special syntes which is called getter and setter...which is below...

        get balance(){
          return this.#balance;
        }
        set balance(amount){
          if(isNaN(amount)){
            throw new Error(`Enterd data is not  number!!`);;
           }
           this.#balance =  amount;
        }
         
        deposit(amount) {
             this.#balance += amount;
        };

        #eligibility(amount){
          console.log('You are eligible for take loan...........(you come through checkEligibilty)')
        }
         checkEligibilty(amount){
             this.#eligibility(amount);

         }

        withdraw(withDrowAmount){
           this.#balance -= withDrowAmount;
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

//In without encasulation we can accessing and modify like as..
// BankAccount.balance = 5055050;     //which are not acceptable...
// console.log(BankAccount.balance)   

//So,overcome this type issue we can bind the private data ane provide some method to access and modify thats called encasulaton.

//erlier private property is just denoted by '_' and just know to devleoper that is private property and don't access from outside.
//ex : balance is denoted as  _balance. but it not over come the issue.

//Now, JS introduce the private property security that if any property to make private then apply '#' prefix of their name.like as
//ex: balance is private then define as #balance...so when the access from outside then it give error.


const encObj = new SavingAccount('juned',6000);
// console.log(encObj);
// encObj.#balance = 800000000;      //if i do like this then it will give error.

//So, Now question that how can we chage their value...so we can made method in same class to change like this(we made in class)...

// console.log(encObj);
// encObj.setBalance(1000);    // it is not the JS method 
// console.log(encObj.getBalance())  ;  // nor it both are maded or used erlier as like just it logics.

//but now we have special syntex for it...which define above in class and access like below way..

// console.log(encObj);     //note that we give not bracket as above nor for the set balance...
// encObj.balance = 5000;
// console.log(encObj.balance);

//Now if we want to make method private then simply as like property we write # in prefix of it name...
//on the Bank class we maded the elibility mehtod private bcz we dont want show the process..
//wo we can made method checkEligibility which pass data to eligibilty to know...

// encObj.#eligibility(5000);  //It will give you error!! bcz its private method
encObj.checkEligibilty(5000);         //we can access thrugh the checkEligibilty...






