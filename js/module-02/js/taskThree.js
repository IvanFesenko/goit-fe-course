"use strict";

const btnTaskThree = document.querySelector("#task-three");

const findLongestWord = function (string) {
  const array = string.split(" ");
  let longestWord = 0;
  let result;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    if (array[i].length > longestWord) {
      longestWord = array[i].length;
      result = array[i];
    }
  }
  return result;
};

btnTaskThree.addEventListener("click", () => {
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

  console.log(findLongestWord("Google do a roll")); // 'Google'

  console.log(findLongestWord("May the force be with you")); // 'force'
});
