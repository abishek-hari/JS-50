// ASYNC/AWAIT
// await wait till the promise is settled
// try/catch

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    await addColor(1000, one, "red");
    await addColor(2000, two, "green");
    await addColor(1000, three, "yellow");
  } catch (error) {
    console.log(error);
  }
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
