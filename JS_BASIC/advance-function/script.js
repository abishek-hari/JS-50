// IIFE
// HOISTING
// CLOSURE

// IIFE - IMMEDITELY - INVOKED FUNCTION EXPRESSION

(function () {
  num1 = 20;
  num2 = 47;
  console.log(`The result is : ${num1 + num2}`);
})();

// Passing argument

(function (num1, num2) {
  console.log(`The result is : ${num1 + num2}`);
})(30, 25);

// Return/assign to variable
const result = (function (num1, num2) {
  return num1 + num2;
})(30, 45);
console.log(result);

// HOISTING

// we can access or call the function before it is declared
sayHello();
function sayHello() {
  console.log("hello! there");
}

// CLOSURE
// closure gives you an access to an outer  function's scope from an inner function
// make private varibale with closures

function outer() {
  let private = "diamond";
  function inner() {
    console.log(`There is a secret: ${private}`);
  }
  return inner;
}

outer()(); // another way to access inner function

const value = outer();
value();

// BASIC EXAMPLE

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name}, you balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 500)();

// BANK ACCOUNT

function account(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name}, you balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey, ${name}, not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}
const john = account("john", 800);
john.showBalance();
john.deposit(200);
john.deposit(700);
john.withdraw(250);
