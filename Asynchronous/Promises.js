// PROMISES
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, one, "red")
    .then(() => addColor(2000, two, "green"))
    .then(() => addColor(1000, three, "violet"))
    .catch((err) => {
      console.log(err);
    });
});

function addColor(time, element, color) {
  return new Promise((res, rej) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        res();
      }, time);
    } else {
      rej(new Error("There is no such element"));
    }
  });
}

// Promise Example
const promise = new Promise((res, rej) => {
  let value = true;
  if (value) {
    res("hey there!");
  } else {
    rej("oops, there was an error");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
