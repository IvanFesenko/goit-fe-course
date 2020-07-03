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
    } else {
      message = `Вы купили ${input} дроидов, на счету осталось ${result} кредитов.`;
    }
  } else {
    message = "Вы ввели некорректное значение!";
  }

  console.log(message);
});
