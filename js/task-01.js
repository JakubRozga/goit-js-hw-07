const categoryCount = categories.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoryCount}`);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  const itemCount = item.querySelectorAll("li").length;
  console.log(
    `Category: ${
      item.querySelector("h2").textContent
    } \n Elements: ${itemCount}`
  );
});
