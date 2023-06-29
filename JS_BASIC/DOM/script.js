document.body.style.backgroundColor = "#aa55f8";

// const btn = document.getElementById("btns");
// btn.style.backgroundColor = "#45da5f";

const result = document.querySelector(".result");

const heading = document.createElement("h2");
const text = document.createTextNode("HI, THERE EVERYONE");
heading.appendChild(text);
result.appendChild(heading);

// Event Overview
const btn = document.querySelector(".btn");
const head = document.querySelector("h1");

btn.addEventListener("click", () => {
  let hasClass = head.classList.contains("red");
  if (hasClass) {
    head.classList.remove("red");
  } else {
    head.classList.add("red");
  }
});

const input = document.querySelector(".input");

// LOCAL STORAGE AND SESSION STORAGE
// getItem, SetItem, RemoveItem, Clear

// Setting Item
localStorage.setItem("name", "lucca");
localStorage.setItem("age", 25);
localStorage.setItem("address", "main street 123");

// Getting Item
const address = localStorage.getItem("address");
console.log(address);

// Removing Item
localStorage.removeItem("age");

// Clearing
localStorage.clear();

// JSON.Stringify and JSON.parse

const friends = ["luca", "tom", "jerry"];

localStorage.setItem("friends", JSON.stringify(friends));
const items = JSON.parse(localStorage.getItem("friends"));
console.log(items[1]);

// SETTIMEOUT AND SETINTERVAL

function sayHello() {
  console.log("heloo There");
}
setTimeout(sayHello, 1000);
// clearInterval();

function sayHi() {
  console.log("hi there");
}
// setInterval(sayHi, 2000);
// clearInterval();
