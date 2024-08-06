const listCategories = document.querySelector("#categories");
const itemsCategory = listCategories.querySelectorAll(".item");
console.log(`Number of categories: ${itemsCategory.length}`);
itemsCategory.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
