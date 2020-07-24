"use strict";

const btnTaskTwo = document.getElementById("task-two");

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);

  const makeAction = action.bind(inventory);
  makeAction(itemName);

  // action(itemName);
};

btnTaskTwo.addEventListener("click", () => {
  console.log(inventory.items);
  invokeInventoryAction("Medkit", inventory.add);
  invokeInventoryAction("Mask gaz", inventory.add.bind(inventory));

  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  invokeInventoryAction("Gas mask", inventory.remove);
  invokeInventoryAction("Mask gaz", inventory.remove.bind(inventory));

  console.log(inventory.items); // ['Knife', 'Medkit']
});
