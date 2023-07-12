// VAR, LET, CONST
// DEFINE, UPDATE, REDEFINE
// const cannot mutate primitive types

// VAR
// we can define a var
var number = 100;
console.log(number);

// we can update the var
number = 200;
console.log(number);

// we can redefine a var
var number = 300;
console.log(number);

//  LET
// we can define a let
let amount = 200;
console.log(amount);

// we can update a let
amount = 500;
console.log(amount);

// we cannot redefine let
// let amount = 450;

// CONST
// we can define const
const num = 30;
console.log(num);

// we cannot update const because we acn assign to an constant variable
// num = 45;
console.log(num);

// we cannot redefine const
// const num = 20;

// we can update reference type [array, objects]
const person = { name: "bob" };
person.name = "john";
console.log(person.name);

// FUNCTIONAL SCOPE AND BLOCK SCOPE:
// let and const are blocked scope - everthing within {}
// var is functional scope

var amounts = 1000;

function greet() {
  var random = "hello";
  console.log(`${random} ${amounts}`); // we can access global scope in local scope
}
// console.log(amounts, random); // we cannot access local scope outside the block
console.log(amounts);
greet();

var total = 100;
var test = true;

if (test) {
  var total = "onion";
  console.log("hello there");
}
console.log(total);
// In var the values in if() will be accessible

let totals = 200;
let tests = true;

if (test) {
  let totals = "onion";
  console.log("hello there");
}
console.log(totals);
//  In let we cannot get the value from inside

// TAGGED TEMPLATE LITERALS

const author = "lubric";
const statement = "life is unpredictable";

const quote = highlight`you may have heard about this quote ${statement} by ${author}`;

const result = document.querySelector("#result");
result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}

// ARROW FUNCTION

const sayHi = () => {
  console.log("hi");
};
sayHi();

// return objects

const object = () => ({ name: "john", age: 25 });
const persons = object();
console.log(persons);

// arrow function as callback function
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => {
  return number > 2;
});
console.log(big);

// reg Function - : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName() {
    setTimeout(() => {
      console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

bob.sayName();
// In arrow function you will get the value because you refering to its current surrounding

const anna = {
  firstName: "anna",
  lastName: "smith",
  sayName() {
    setTimeout(function () {
      console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};
anna.sayName();
// you get undefined because this refers to the window object

// DEFAULT PARAMETERS

function sayHello(person = "susan") {
  console.log(`hello, ${person}`);
}

sayHello(); // If you dont pass any argument the default parameter will be shown

// In hoisting concept : If you call the function above the declaration but In arrow function you cannot do you will get an error
