"use strict";

const btnTaskThree = document.querySelector("#task-three");

const findBestEmployee = function (employees) {
  let bestValue = 0;
  let BestEmployee;
  // for (const key of Object.keys(employees)) {
  //   if (employees[key] > bestValue) {
  //     bestValue = employees[key];
  //     BestEmployee = key;
  //   }
  // }

  for (let [key, value] of Object.entries(employees)) {
    if (value > bestValue) {
      bestValue = value;
      BestEmployee = key;
    }
  }
  return `${BestEmployee}: ${bestValue}`;
};

btnTaskThree.addEventListener("click", () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
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
