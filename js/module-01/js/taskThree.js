"use strict";

const btnTaskThree = document.querySelector("#task-three");

btnTaskThree.addEventListener("click", () => {
  const ADMIN_PASSWORD = "qwerty";
  let message;

  const input = prompt("Введите свой пароль для входа!");

  if (input === null) {
    message = "Отменено пользователем!";
  } else if (input === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
  alert(message);
});
