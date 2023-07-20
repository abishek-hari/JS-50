const url = "https://source.unsplash.com/random";
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");

btn.addEventListener("click", () => {
  loadImg(url)
    .then((data) => {
      container.appendChild(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function loadImg(url) {
  return new Promise((res, rej) => {
    let img = new Image();
    img.addEventListener("load", () => {
      res(img);
    });
    img.addEventListener("error", () => {
      rej(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
  });
}
