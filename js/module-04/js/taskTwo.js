"use strict";

const btnTaskTwo = document.getElementById("task-two");

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    if (!this) {
      inventory.items.push(itemName);
    } else {
      this.items.push(itemName);
    }
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    if (!this) {
      inventory.items = inventory.items.filter((item) => item !== itemName);
    } else {
      this.items = this.items.filter((item) => item !== itemName);
    }
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

btnTaskTwo.addEventListener("click", () => {
  console.log(inventory.items);
  invokeInventoryAction("Medkit", inventory.add);
  // Invoking action on Medkit
  // Adding Medkit to inventory

  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

  invokeInventoryAction("Gas mask", inventory.remove);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory

  console.log(inventory.items); // ['Knife', 'Medkit']
});
