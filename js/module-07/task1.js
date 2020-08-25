const numberOfCategories = document.querySelectorAll(".item");
console.log(`В списке ${numberOfCategories.length} категории.`);

const titleAndSumOfLi = numberOfCategories.forEach((element) =>
  console.log(
    `Категория: ${element.querySelector("h2").textContent}
    Количество элементов: ${element.querySelectorAll("li").length}`
  )
);
