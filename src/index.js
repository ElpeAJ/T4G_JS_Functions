function changeColor() {
  const colorChange = document.querySelector("#button");
  colorChange.style.background = "blue"; // Example: change text color to blue
}

function hoverColor() {
  const hoverChange = document.querySelector("#button");
  hoverChange.style.background = "grey"; // Example: change text color to blue
}

function redColor() {
  const redChange = document.querySelector("#button");
  redChange.style.background = "red"; // Example: change text color to blue
}
const button = document.querySelector("#button");
// button.addEventListener("click", changeColor);
button.addEventListener("mouseover", hoverColor);
// button.addEventListener("mouseout", redColor);
