/*
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;
const span = document.querySelector('#value');
const buttonAdd = document.querySelector('button[data-action="increment"]')
const buttonRemove = document.querySelector('button[data-action="decrement"]')


buttonAdd.addEventListener('click', onButtonAddClick)
buttonRemove.addEventListener('click', onButtonRemoveClick)

function onButtonAddClick() { 
    counterValue += 1;
    span.textContent = counterValue;
}

function onButtonRemoveClick() { 
    counterValue -= 1;
    span.textContent = counterValue;
}