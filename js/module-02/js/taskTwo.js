"use strict";

const btnTaskTwo = document.querySelector("#task-two");

const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
};

btnTaskTwo.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  );
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  );

  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );
});
