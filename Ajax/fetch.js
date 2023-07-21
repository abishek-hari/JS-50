// FETCH BUILT-IN
// PROMISED BASED

const url = "./api/people.json";

// Fetch with function
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => displayItems(data))
    .catch((err) => console.log(err));
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("p");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// Example
fetch(url)
  .then((response) => {
    // convert response into JSON
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Fetch with async/await
const btns = document.querySelector(".btns");
btns.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItem(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItem = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("p");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
