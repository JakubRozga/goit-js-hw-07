const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

ingredients.forEach(function(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
});