const categoriesEl = document.querySelector('#categories');
console.log("Number of categories:", categoriesEl.children.length);

const h2El = document.querySelectorAll('.item h2');
h2El.forEach(el => console.log('Category:', el.textContent));

const liEl = document.querySelectorAll(".item ul");
liEl.forEach(el => console.log('Elements:', el.children.length));

