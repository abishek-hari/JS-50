// JAVASCRIPT IS A SINGLE THREADED LANGUAGE

// Synchronous

// MAKING A SOUP
// Boil water 10 min
// chop carrots
// add carrots, boil for 5 min
// chop onion
// add onion, boil for 5 min

boilWater(1000);
console.log(`chop carrot`);
boilWater(500);
console.log(`chop onion`);
boilWater(500);

function boilWater(time) {
  console.log(`boiling`);
  for (let i = 0; i < time; i++) {
    console.log(`still not done`);
  }
  console.log(`Done`);
}

// Asynchronous
// BROWSER!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// browser provides the above functions

boilWater(1000);
console.log(`chop carrot`);
console.log(`chop onion`);

function boilWater(time) {
  console.log(`boiling`);
  setTimeout(() => {
    console.log(`Done`);
  }, time);
}

// CALLBACKS, PROMISES, ASYNC/AWAIT

// CALLBACK

boilWater(1000);
console.log(`chop carrot`);

function boilWater() {
  console.log(`boiling`);
  setTimeout(() => {
    console.log(`Done`);
    console.log("add carrots");
    setTimeout(() => {
      console.log(`carrots done`);
      console.log(`add onions`);
      setTimeout(() => {
        console.log(`Onion Done`);
      }, 500);
    }, 500);
    console.log("chop onion");
  }, 1000);
}

// CALLBACK HELL

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    one.style.color = "red";
    setTimeout(() => {
      two.style.color = "green";
      setTimeout(() => {
        three.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
});
