import users from "./users.js";

//==== Задание 1 ===================================================

// Получить массив имен всех пользователей (поле name).
//****** Вариант 1 ******
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
//****** Вариант 2 ******
//const getUserNames = (users) => users.map((user) => user.name);

console.log("Результат Задание 1:");
console.log(getUserNames(users));
//==== Задание 1 =======================================================

//==== Задание 2 =======================================================
//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
//****** Вариант 1 ******
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
//****** Вариант 2 ******
//const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);

console.log("Результат Задание 2:");
console.log(getUsersWithEyeColor(users, "blue"));
//==== Задание 2 =======================================================

//==== Задание 3 =======================================================
//Получить массив имен пользователей по полу (поле gender).
//****** Вариант 1 ******
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};
//****** Вариант 2 ******
// const getUsersWithGender = (users, gender) =>
//     users.filter(user => user.gender === gender).map(user => user.name);

console.log("Результат Задание 3:");
console.log(getUsersWithGender(users, "male"));
//==== Задание 3 =======================================================

//==== Задание 4 =======================================================

//Получить массив только неактивных пользователей (поле isActive).
//****** Вариант 1 ******
// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive).map((user) => user);
// };
//****** Вариант 2 ******
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log("Результат Задание 4:");
console.log(getInactiveUsers(users));

//****** Вариант 1 ******
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive).map((user) => user);
// };
//****** Вариант 2 ******
const getActiveUsers = (users) => users.filter((user) => user.isActive);

console.log(getActiveUsers(users));

//==== Задание 4 =======================================================

//==== Задание 5 =======================================================
//Получить пользователя (не массив) по email (поле email, он уникальный).
//****** Вариант 1 ******
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
//****** Вариант 2 ******
// const getUserWithEmail = (users, email) => users.find((user) => user.email === email);
console.log("Результат Задание 5:");
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
//==== Задание 5 =======================================================

//==== Задание 6 =======================================================
//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age <= max && user.age >= min);
};
console.log("Результат Задание 6:");
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//==== Задание 6 =======================================================

//==== Задание 7 =======================================================
//Получить общую сумму баланса (поле balance) всех пользователей.
//****** Вариант 1 ******
// const calculateTotalBalance = (users) => {
//   let result = 0;
//   users.forEach((user) => {
//     result += user.balance;
//   });
//   return result;
// };
//****** Вариант 2 ******
const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log("Результат Задание 7:");
console.log(calculateTotalBalance(users));

//==== Задание 7 =======================================================

//==== Задание 8 =======================================================
//Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

console.log("Результат Задание 8:");
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

//==== Задание 8 =======================================================

//==== Задание 9 =======================================================
//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = (users) =>
  users
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map((user) => user.name);

console.log("Результат Задание 9:");
console.log(getNamesSortedByFriendsCount(users));

//==== Задание 9 =======================================================

//==== Задание 10 =======================================================
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = (users) => {
  /****** Вариант 1 ******/
  // const usersSkills = users.reduce((usersSkills, user) => {
  //   return usersSkills.concat(user.skills);
  // }, []);
  // return usersSkills
  //   .filter((skill, i) => usersSkills.indexOf(skill) === i)
  //   .sort();
  /****** Вариант 2 ******/
  return [
    ...new Set(
      users.reduce((usersSkills, user) => {
        return usersSkills.concat(user.skills);
      }, [])
    ),
  ].sort();
};

console.log("Результат Задание 10:");
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem',
// 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
