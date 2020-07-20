"use strict";

const btnTaskFour = document.querySelector("#task-four");

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder(".");

btnTaskFour.addEventListener("click", () => {
  builder.append("^");
  console.log(builder.value); // '.^'

  builder.prepend("^");
  console.log(builder.value); // '^.^'

  builder.pad("=");
  console.log(builder.value); // '=^.^='
});
