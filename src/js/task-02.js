const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map(el => {
  const liEl = document.createElement('li');  
  liEl.classList.add('item');
  liEl.textContent = el;

  return liEl;
  
});
ingredientsEl.append(...ingredientsArr);
