// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector('input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputHandler);

function onInputHandler(event) {
  if (event.currentTarget.value === '') {
    spanEl.textContent = 'Annonymous';
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
