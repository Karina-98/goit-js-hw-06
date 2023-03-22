/* 
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

*/





const buttonChangeColor = document.querySelector('button');
const widgetChangeColor = document.querySelector(".widget");
const spanChangeColor = document.querySelector(".color");

buttonChangeColor.addEventListener('click', onChangeColorBackground);

function onChangeColorBackground(event) {
    document.body.style.backgroundColor = getRandomHexColor();

    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    }
    spanChangeColor.textContent = getRandomHexColor();
}