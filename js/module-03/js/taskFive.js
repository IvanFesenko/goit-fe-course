"use strict";

const btnTaskFive = document.querySelector("#task-five");

const productsSix = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let result = [];
  for (const obj of arr) {
    result.push(obj[prop]);
  }
  return result;
};

btnTaskFive.addEventListener("click", () => {
  console.log(getAllPropValues(productsSix, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

  console.log(getAllPropValues(productsSix, "quantity")); // [4, 3, 7, 2]

  console.log(getAllPropValues(productsSix, "category")); // []
});
