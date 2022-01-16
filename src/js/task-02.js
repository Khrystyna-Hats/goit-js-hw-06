const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1 ) { 
  const ingRef = document.createElement("li");
  ingRef.classList.add("item");
  ingRef.textContent = ingredients[i];
  listRef.append(ingRef);
}

console.log(listRef);

  