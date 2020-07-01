"use strict";

const btnTaskTwo = document.querySelector("#task-two");

btnTaskTwo.addEventListener("click", () => {
  const total = 100;
  const ordered = 20;

  const chekedResult =
    total > ordered
      ? `Заказ на ${ordered} ед. оформлен, с вами свяжется менеджер`
      : `На складе недостаточно товаров! Доступно: ${total} в заказе ${ordered}`;

  console.log(chekedResult);

  const orderedTwo = 80;
  const chekedResultTwo =
    total > orderedTwo
      ? `Заказ на ${orderedTwo} ед. оформлен, с вами свяжется менеджер`
      : `На складе недостаточно товаров! Доступно: ${total} в заказе ${orderedTwo}`;

  console.log(chekedResultTwo);

  const orderedThree = 130;
  const chekedResultThree =
    total > orderedThree
      ? `Заказ на ${orderedThree} ед. оформлен, с вами свяжется менеджер`
      : `На складе недостаточно товаров! Доступно: ${total} в заказе ${orderedThree}`;

  console.log(chekedResultThree);
});
