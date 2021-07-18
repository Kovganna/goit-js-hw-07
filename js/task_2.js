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

const listEl = document.querySelector('#ingredients');
const elem = ingredients.map((ingredient) => {
  let createLiElement = document.createElement('li');
  createLiElement.append(ingredient);

  return createLiElement;
});

listEl.append(...elem);
console.log(elem);







