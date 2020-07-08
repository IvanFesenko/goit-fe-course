"use strict";

const btnTaskFour = document.querySelector("#task-four");

const countTotalSalary = function (employees) {
  let result = 0;
  //const values = Object.values(employees);
  // for (let i = 0; i < values.length; i += 1) {
  //   result += values[i];
  // }

  // for (const key of Object.keys(employees)) {
  //   result += employees[key];
  // }

  for (const value of Object.values(employees)) {
    result += value;
  }

  return result;
};

btnTaskFour.addEventListener("click", () => {
  console.log(countTotalSalary({})); // 0
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); // 330
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); // 400
});
