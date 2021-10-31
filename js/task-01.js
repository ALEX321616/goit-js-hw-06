const NumberCategories = document
  .querySelector("#categories")
  .querySelectorAll("ul").length;

const categoriesList = document
  .querySelector("#categories")
  .querySelectorAll(".item");

console.log(`Number of categories: ${NumberCategories}`);

categoriesList.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${element.querySelector("ul").querySelectorAll("li").length}`
  );
});
