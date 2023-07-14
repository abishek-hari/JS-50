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

// ARRAY DESTRUCTURING

const fruits = ["apple", "orange", "grapes", "banana"];

const [apple, orange, grapes, banana] = fruits; // destructiring names can be anything

console.log(apple, orange, grapes, banana);

// SWAP VALUES

let first = "first";
let second = "second";

// older way
// let temp = second;
// second = first;
// first = temp;

// using destructuring
[second, first] = [first, second];
console.log(first, second);

// OBJECTS DESTRUCTURING
// In arrays you can desturture with any names but in object it should refer crtly to the objects properties

const beckam = {
  name: "beckam",
  last: "joe",
  address: {
    street: "123 main street",
  },
};

const {
  name,
  last: lastName,
  address: { street },
} = beckam; // last:lastName Its called aliasing (can change the name)
console.log(name, lastName, street);

// object destructuring using function

function printPerson(person) {
  const {
    name,
    last,
    address: { street },
  } = person;
  console.log(name, last, street);
}
printPerson(beckam);

// FOR OF
// loops though the values of an iterable objects
// strings,array ,map, set etc - NOT OBJECTS
//unlike  forEach - we can use break, continue

const friends = ["carry", "morgan", "lisa"];

for (const friend of friends) {
  if (friend === "lisa") {
    break;
  }
  console.log(friend);
}

// SPREAD OPERATOR...
// Allows an iterable to spread/expand individually inside reciever
// split into single items and copy them
const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["jim", "kin", "jun"];
const girls = ["lisa", "rose", "angel"];
const bestFriend = "arnold";

// To make all the abouve array into single items we can use ...

const friend = [...boys, bestFriend, ...girls];
console.log(friend);

// If we use spread operator we will copy the items and if we change it will not affect the orginal array

const oldPerson = {
  name: "john",
  job: "developer",
};
const newPerson = { ...oldPerson, city: "chicago" }; //you can set new properties to this
console.log(newPerson);

// Function Argument - spread operator

const numb = [23, 45, 67, 89, 34];
console.log(Math.max(...numb));

const cary = ["cary", "sandres"];

const hiThere = (name, lastname) => {
  console.log(`hello , ${name} ${lastname}`);
};
hiThere(...cary);

// REST OPERATOR
// GATHERS/COLLECTS THE ITEMS
// It can be used in destructuring arrays and in gathering parameters in function
// spread operator is for function argument and rest is for function parameters

const fruit = ["apple", "orange", "grapes", "banana"];
const [tops, ...fruty] = fruit;
console.log(tops, fruty);

const jason = {
  name: "john",
  job: "developer",
};

const { job } = jason;
console.log(job);

const getAverageScore = (name, ...scores) => {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  console.log(`hey ${name} your score is ${sum / scores.length}`);
};
getAverageScore("harry", 89, 78, 54, 56, 29, 20);

// ARRAY.from AND ARRAY.of - NOT ON THE PROTOTYPE
// ARRAY.from
// ARRAY.of
// of creates a new array instance from a variable number of arguments.

const oldfriends = Array.of("julie", 25, "developer");
console.log(oldfriends);

// Array.from - returns Array object from any object with a length property or an iterable object
// from turns array-like/ish into array - string, nodeList,set

const edureka = "edureka";
console.log(Array.from(edureka));

function countTotal() {
  let sums = Array.from(arguments).reduce((total, currNum) => {
    total += currNum;
    return total;
  }, 0);
  console.log(sums);
}

countTotal(34, 56, 29, 79, 300);

// Array.from - NodeList

const p = document.querySelectorAll("p");
const firstPara = document.querySelector(".first");
const secondPara = document.querySelector(".second");

let newtext = Array.from(p);
newtext = newtext.map((item) => `<span>${item.textContent}</span>`).join(" ");
firstPara.innerHTML = newtext;

// shortway
// Array.from has an second argument
const anotherText = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

secondPara.innerHTML = anotherText;

// FIND, FINDINDEX, EVERY, SOME
// FIND - gets specific item.
// FINDINDEX - get's index of the item
// EVERY - every item in the array
// SOME - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];
const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];

const ana = people.find((person) => (person.name = "anna"));
console.log(ana);

const ram = people.findIndex((persons) => persons.id === 2);
console.log(ram);

// "for in" loop - iterates over objects properties
// not advised to use it on arrays, especially if the order is important
// on arrays use "for of" loop instead

const jasonRoi = {
  name: "john",
  job: "developer",
};

for (const propertyName in jasonRoi) {
  console.log(`${propertyName} : ${jasonRoi[propertyName]}`);
}

// THREE METHODS TO CONVERT OBJECTS INTO ARRAYS
// Object.keys() - Converts property names into array
// Object.values() = Converts property values into array
// Object.entries() - converts both

const leo = {
  name: "john",
  age: 25,
  job: "developer",
};

const keys = Object.keys(leo);
console.log(keys);

const values = Object.values(leo);
console.log(values);

const entry = Object.entries(leo);
console.log(entry);

// SET OBJECT - Stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach

const unique = new Set();

unique.add("first");
unique.add("second");
unique.add("third");

unique.has("third"); // check if the value ( return true or false)

unique.delete("second"); // deleted particular value
console.log(unique);

// new Set - accepts iterable objects

const products = [
  { title: " higb-back ", company: "ikea" },
  { title: " higb-front ", company: "marcos" },
  { title: " higb-back ", company: "ikea" },
  { title: "accent chair", company: "caressa" },
  { title: "wooden table ", company: "ikea" },
];

const companies = products.map((item) => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = ["all", ...uniqueCompanies];
console.log(finalCompanies);

//  You can optimize you code

const resultCompany = ["all", ...new Set(products.map((item) => item.company))];
console.log(resultCompany);

// String includes() - checks if a string containes another string

const product = [
  { title: "modern poster" },
  { title: "Bar stool" },
  { title: "Armchair" },
  { title: "leather Chair" },
];

const pro = "a";
const filteredProducts = product.filter((product) => {
  return product.title.toLowerCase().includes(pro);
});
console.log(filteredProducts);

// Array includes() - checks if the items is an array
// useful in the conditional statements

const groceries = ["milk", "bread", "butter"];
if (groceries.includes("milk")) {
  console.log(`yeah! it's there`);
}
