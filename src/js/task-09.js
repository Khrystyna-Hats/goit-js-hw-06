function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener('click', handlerChangeColor);

function handlerChangeColor(event) {
  text.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
 }