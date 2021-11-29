// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const spanEl = document.querySelector('#value');
const buttonEl = document.querySelectorAll('#counter button');

buttonEl.forEach(btn => btn.addEventListener('click', onClickBtnHandler));

function onClickBtnHandler() {
  const getData = this.getAttribute('data-action');
  if (getData === 'increment') {
    spanEl.textContent = Number(spanEl.textContent) + 1;
  } else {
    spanEl.textContent = Number(spanEl.textContent) - 1;
  }
}
