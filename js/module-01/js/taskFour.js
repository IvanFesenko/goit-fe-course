"use strict";

const btnTaskFour = document.querySelector("#task-four");

btnTaskFour.addEventListener("click", () => {
  const credits = 23580;
  const pricePerDroid = 3000;
  let message;

  let input = prompt(
    "Укажите количество дроидов, которые Вы желаете преобрести?"
  );

  if (input === null) {
    message = "Отменено пользователем!";
  } else if (input > 0) {
    input = Number(input);

    const totalPrice = input * pricePerDroid;
    const result = credits - totalPrice;

    if (totalPrice > credits) {
      message = "Недостаточно средств на счету!";
    } else if (input === 1) {
      message = `Вы купили ${input} дроид, на счету осталось ${result} кредитов.`;
    } else if (input >= 2 && input <= 4) {
      message = `Вы купили ${input} дроида, на счету осталось ${result} кредитов.`;
    } else {
      message = `Вы купили ${input} дроидов, на счету осталось ${result} кредитов.`;
    }
  } else {
    message = "Вы ввели некорректное значение!";
  }

  console.log(message);
});
