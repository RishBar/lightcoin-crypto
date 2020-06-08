class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    // this.balance = 0;
  }
  get balance() {
    let num = 0;
    for (let transaction of this.transactions) {
      num += transaction.value();
    }
    return num;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (this.value() < 0 && this.account.balance < this.amount) {
      console.log('u aint got no funds b');
    } else {
      this.time = new Date();
      this.account.addTransaction(this);
    }
  }

}

class Withdrawal extends Transaction {

  value() {
    return (this.amount * -1);
  }

}

class Deposit extends Transaction {

  value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

let a1 = new Account('Rbarz');
// console.log(a1);


let t1 = new Deposit(120.00, a1);
t1.commit();
console.log(a1.balance);


let t2 = new Withdrawal(20.00, a1);
t2.commit();
console.log(a1.balance);




// console.log(a1.transaction);

// let t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// let t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);
