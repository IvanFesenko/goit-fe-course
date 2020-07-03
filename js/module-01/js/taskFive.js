"use strict";

const btnTaskFive = document.querySelector("#task-five");

btnTaskFive.addEventListener("click", () => {
  const china = "Китай";
  const chile = "Чили";
  const australia = "Австралия";
  const india = "Индия";
  const jamaica = "Ямайка";

  let price;
  let message;

  const input = prompt(
    "Введите название страны в которую необходимо доставить товар! Доступные страны: Китай, Чили, Австралия, Индия, Ямайка."
  );

  if (input === null) {
    alert("Отменено пользователем!");
  } else if (!input.trim()) {
    alert("Введена пустая строка");
  } else {
    const inputInUC = input[0].toUpperCase() + input.slice(1).toLowerCase();

    switch (inputInUC) {
      case china:
        price = 100;
        message = `Доставка в ${china} будет стоить ${price} кредитов`;
        console.log(message);
        break;

      case chile:
        price = 250;
        message = `Доставка в ${chile} будет стоить ${price} кредитов`;
        console.log(message);
        break;

      case australia:
        price = 170;
        message = `Доставка в ${australia} будет стоить ${price} кредитов`;
        console.log(message);
        break;

      case india:
        price = 80;
        message = `Доставка в ${india} будет стоить ${price} кредитов`;
        console.log(message);
        break;

      case jamaica:
        price = 120;
        message = `Доставка в ${jamaica} будет стоить ${price} кредитов`;
        console.log(message);
        break;

      default:
        alert("В вашу страну доставка не доступна");
    }
  }
});
