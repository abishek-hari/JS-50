// AJAX - Asyncronous Javascript and XML
// HTTP Requests - Communication between client and server
// API - Apllication Programming Interface

// JSON - Javascript Object Notation

const url = "./api/people.json";
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  xhr.send();
}
// function getData() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "./api/sample.txt");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.createElement("p");
//       text.textContent = xhr.responseText;
//       document.body.appendChild(text);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };

//   xhr.send();
// }
