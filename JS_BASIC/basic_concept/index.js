// variables - are used to store data
let names = "lisa";
console.log(names);

// assign value later , modify existing
let address, zip;

address = " 101 main street";
zip = "zeden";
console.log(address, zip);

// VARIABLE CHALLENGE

let firstName = "naruto";
let lastName = "Buruto";
let address_1 = "main street";
address_1 = "first street";

console.log(firstName, lastName, address_1);

// STRING CONCAT CHALLENGE

const street = "Naiper";
const country = "Japan";
let fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// NUMBER CHALLENGE

// challenge-1
const score1 = 80;
const score2 = 78;
const score3 = 92;

const totalScore = score1 + score2 + score3;

const averageScore = totalScore / 3;

console.log(totalScore, averageScore);

// challenge-2
const plate = 20;
const people = 7;

let leftOut = plate % people;
leftOut++;

const message = `There are ${leftOut} plates remaining`;
console.log(message);

// DATATYPES
// PRIMITIVE DATATYPE
// string, number, boolean, null, undefined, symbol

// typeof - operator (typeof variable) (typeof value)
const name_1 = "diana";
console.log(typeof name_1);
console.log(typeof "helo");

// NON-PRIMITIVE DATATYPE are object
// Array, function, object

// ARRAY CHALLENGE
const fruits = ["apple", "banana", "grapes", 24];
const firstFruit = fruits[0];
fruits[3] = "orange";
console.log(firstFruit);
console.log(fruits);

// FUNCTION
// FUNCTION - DECLARE , INVOKE
// parameters, arguments
// function expression

// FUNCTION CHALLENGE
function calculateTotal(subTotal, tax) {
  const sum = subTotal + tax;
  return sum;
}

let order1 = calculateTotal(340, 34.5);
let order2 = calculateTotal(240, 34.5);
let order3 = calculateTotal(440, 34.5);

const result = { order1, order2, order3 };

console.log(result);

// OBJECT CHALLENGE

const car = {
  make: "India",
  model: "SUV",
  year: 2021,
  colors: ["red", "black", "white"],
  drive() {
    console.log("YOU are driving well");
  },
  stop() {
    console.log("hey! just stop the car");
  },
};

console.log(car.make);
console.log(car.colors[1]);
car.drive();
car.stop();

// CONDITIONAL CHALLENGE

const person1 = {
  name: "harry",
  age: 17,
  status: "residental",
};

const person2 = {
  name: "poter",
  age: 22,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "residental") {
  console.log("you are eligible");
} else {
  console.log("you are note eligible");
}

// STRING CHALLENGE

function fullName(firstName, lastName) {
  const result = `${firstName} ${lastName}`;
  return result.toUpperCase();
}

console.log(fullName("jhon", "slayer"));

//VALUE VS REFERENCE

const number = 1;
let number2 = number;
number2 = 5;
console.log(number);
console.log(number2);

let person = { name: "bob" };
let person3 = person;
person3.name = "sussy";
console.log(person.name);
console.log(person3.name);
