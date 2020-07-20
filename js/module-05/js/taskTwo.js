"use strict";

const btnTaskTwo = document.querySelector("#task-two");

class User {
  constructor({ name = "Name", age = 0, followers = 0 }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo = function () {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  };
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

btnTaskTwo.addEventListener("click", () => {
  mango.getInfo(); // User Mango is 2 years old and has 20 followers
  poly.getInfo(); // User Poly is 3 years old and has 17 followers
});
