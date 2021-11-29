// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let inputValue = 0;

inputEl.addEventListener('input', onInputHandler);
function onInputHandler(event) {
  inputValue = event.currentTarget.value;
}

createBtnEl.addEventListener('click', createBoxes);
function createBoxes() {
  const divMarkup = [];

  while (divMarkup.length < inputValue) {
    const widthOfContainer = 30 + divMarkup.length * 10;
    const heightOfContainer = 30 + divMarkup.length * 10;
    const newDiv = document.createElement('div');
    newDiv.style.width = `${widthOfContainer}px`;
    newDiv.style.height = `${heightOfContainer}px`;
    newDiv.style.background = `${getRandomHexColor()}`;
    newDiv.classList.add('container');
    divMarkup.push(newDiv);
  }

  boxesEl.append(...divMarkup);
}

destroyBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  const createdDivsEl = document.querySelectorAll('.container');
  createdDivsEl.forEach(div => div.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
