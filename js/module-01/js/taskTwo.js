"use strict";

const btnTaskTwo = document.querySelector("#task-two");

btnTaskTwo.addEventListener("click", () => {
  const total = 100;
  const ordered = 50;

  const chekedResulte =
    total > ordered
      ? "Заказ оформлен, с вами свяжется менеджер"
      : "На складе недостаточно твоаров!";

  console.log(chekedResulte);
});
