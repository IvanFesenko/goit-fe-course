"use strict";

const btnTaskSeven = document.querySelector("#task-seven");

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (isLoginUnique(allLogins, login) === true) {
    return "Такой логин уже используется!";
  }

  allLogins.push(login);
  return "Логин успешно добавлен!";
};

btnTaskSeven.addEventListener("click", () => {
  const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

  console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
  console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
});
