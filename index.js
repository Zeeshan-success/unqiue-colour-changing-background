let btn = document.querySelector("#changing");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 300);
  let green = Math.floor(Math.random() * 300);
  let blue = Math.floor(Math.random() * 300);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
