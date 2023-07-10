// OBJECT BASIC
// THIS
// FACTORY FUNCTION
// CONSTRUCTOR FUNCTION
// PROTOTYPAL INHERITANCE
// ES6 CLASS

// OBJECR BASIC

// Objects are collection of key (property) value pairs. Property values can be strings, number, booleans, arrays and functions however if the property value is a function its called a method

// object literal syntax,{}
// dot notation

const person = {
  name: "harry",
  age: 25,
  married: true,
  sibilings: ["hermoine", "dave"],
  greet(name) {
    console.log(`hello, my friend ${name}`);
  },
};

console.log(person);
person.greet("leo");
console.log(person.name);

// NESTED OBJECTS
const work = {
  job: {
    name: "developer",
  },
  company: {
    name: "ThoughtWorks",
    address: "123 main street",
  },
};
console.log(work.job.name);
console.log(work.company.address);

// set variable as property value
const age = 50;

const person1 = {
  name: "jack",
  age: age,
  "random-value": "random",
};
console.log(person1);

// BRACKET NOTATION
console.log(person1["random-value"]);
// in bracket notation we can access the name like random-value which is not available in doy notation

// THIS KEYWORD

const bob = {
  firstName: "bob",
  lastName: "Anderson",
  fullname() {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  },
};
bob.fullname();

// In reg function (not arrow) "this" determined by "HOW"!!! a function is invoked (left of .)

function showThis() {
  console.log(this);
}

const jhon = {
  name: "jhon",
  showThis,
};

jhon.showThis();

const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", showThis);
btn1.addEventListener("click", function () {
  showThis();
});

// BLUE PRINT
// FACTORY FUNCTION and CONSTRUCTOR FUNCTION

// FACTORY FUNCTION

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullname() {
      console.log(`my full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const susy = createPerson("susy", "anderson");
susy.fullname();

// blueprint
// CONSTRUCTOR FUNCTION
// new - create new object, points to it , omit return
// common pratice to use camelcase in constructor function
// this function is special

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = function () {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  };
  console.log(this);
}

const ana = new Person("ana", "maria");
ana.fullname();
const cary = new Person("cary", "maria");
cary.fullname();

// you should always write the new keyword in the constructor function
// you should write the first letter of variable in caps
// this keyword is must and omit return

// CONSTRUCTOR PROPERTY
// all objects in javascript has access to constructor property that returns a constructor function that created it
// builtin constructor functions
// arrays and functions are objects in javascript

const mrunal = {};
console.log(mrunal.constructor);
const list = [];
console.log(mrunal.constructor);
const sayHi = function () {};
console.log(mrunal.constructor);
// All array and functions are objects in javascript so that we can use constructor property to them

const thakur = new ana.constructor("thakur", "priya");
thakur.fullname(); // we can create new instance using the before used variable (eg: ana)

// PROTOTYPE PROPERTY
// prototypal inheritance modal
/* 
javascript uses prototypal inheritance modal. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor function/class. so any properties or methods or prototype can be accessed by every instance. prototype property returns a object 
*/

function Account(name, initialBalace) {
  this.name = name;
  this.balance = initialBalace;
}

const raki = new Account("raki", 200);
const rithish = new Account("rithish", 100);

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`hi ${this.name} you balance is ${this.balance}`);
};

raki.deposit(300);
raki.deposit(600);

// PROTOTYPE LOOKUP
