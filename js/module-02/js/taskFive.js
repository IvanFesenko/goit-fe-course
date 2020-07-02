"use strict";

const btnTaskFive = document.querySelector("#task-five");

const checkForSpam = function (message) {
  let stringForTest = message.toLowerCase();
  if (
    stringForTest.indexOf("spam") !== -1 ||
    stringForTest.indexOf("sale") !== -1
  ) {
    return true;
  }
  return false;
};

btnTaskFive.addEventListener("click", () => {
  console.log(checkForSpam("Latest technology news")); // false

  console.log(checkForSpam("JavaScript weekly newsletter")); // false

  console.log(checkForSpam("Get best sale offers now!")); // true

  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
});
