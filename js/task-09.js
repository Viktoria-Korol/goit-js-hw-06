//! 9 ЗАВДАННЯ
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change -
//   color і виводить значення кольору в span.color.

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", changeColorBody);

function changeColorBody() {
   const color = getRandomHexColor();

   bodyEl.style.backgroundColor = color;
   textColor.textContent = color;
}