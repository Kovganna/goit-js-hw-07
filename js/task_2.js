// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const listEl = document.querySelector(`#ingredients`);
let itemEl = new DocumentFragment();
for (let i = 0; i < 6; i++) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  itemEl.appendChild(li);
}
document.querySelector('#ingredients').append(itemEl);