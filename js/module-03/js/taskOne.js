"use strict";

const btnTaskOne = document.getElementById("task-one");

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const changeObjectKey = function (obj, key, value) {
  obj[key] = value;
};

btnTaskOne.addEventListener("click", () => {
  console.log(user);
  changeObjectKey(user, "mood", "happy");
  changeObjectKey(user, "hobby", "skydiving");
  changeObjectKey(user, "premium", false);

  for (const key of Object.keys(user)) {
    console.log(`${key}:${user[key]}`);
  }
});
