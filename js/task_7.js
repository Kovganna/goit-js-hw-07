// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs={
input: document.getElementById('font-size-control'),
span: document.getElementById('text'),
}
refs.input.addEventListener('input', changeInputRange);
function changeInputRange(event) {
    refs.span.style.fontSize = event.currentTarget.value + 'px';
}   