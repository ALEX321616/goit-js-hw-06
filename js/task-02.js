const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ListIngredients = document.querySelector("#ingredients");
const arrItems = [];
const ItemsIngredients = ingredients.map((element, i) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  arrItems.push(itemEl);
});

ListIngredients.append(...arrItems);

// const ItemsIngredient = ingredients
//   .map((element) => `<li class="item">${element}</li>`)
//   .join("");
// ListIngredients.innerHTML = ItemIngredients;
