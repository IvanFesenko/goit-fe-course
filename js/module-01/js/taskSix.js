"use strict";

const btnTaskSix = document.querySelector("#task-six");

btnTaskSix.addEventListener("click", () => {
  let total = 0;
  let input;

  do {
    let input = prompt("Введите число");

    if (input === null) {
      console.log("Отменено пользователем!");
      break;
    }

    input = Number(input);
    const checkForNaN = isNaN(input);

    if (checkForNaN) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }

    total += input;
  } while (input !== null);

  alert(`Общая сумма чисел равна ${total}`);
});
