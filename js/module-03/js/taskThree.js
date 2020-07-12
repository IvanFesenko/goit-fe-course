"use strict";

const btnTaskThree = document.querySelector("#task-three");

const findBestEmployee = function (employees) {
  let bestValue;
  let bestEmployee;
  // for (const key of Object.keys(employees)) {
  //   if (employees[key] > bestValue) {
  //     bestValue = employees[key];
  //     BestEmployee = key;
  //   }
  // }

  for (const [key, value] of Object.entries(employees)) {
    if (!bestValue || value > bestValue) {
      bestValue = value;
      bestEmployee = key;
    }
  }
  return `${bestEmployee}: ${bestValue}`;
};

btnTaskThree.addEventListener("click", () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      lorence: 99,
      helen: 1,
    })
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })
  ); // lux
});
