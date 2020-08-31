// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxes = document.querySelector("#boxes");
const amount = document.querySelector(".boxes-amount");
const buttonRen = document.querySelector('button[data-action="render"]');
const buttonDel = document.querySelector('button[data-action="destroy"]');

function clearBoxes() {
  boxes.innerHTML = "";
}

function renderBoxes() {
  createBoxes(+amount.value);
}

function colorGeneration() {
  const r = getRandomColor();
  const g = getRandomColor();
  const b = getRandomColor();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function toHex(num) {
  return ("0" + Number(num).toString(16)).slice(-2);
}

function getRandomColor() {
  return Math.floor(0 + Math.random() * 256);
}

function boxGeneration(size) {
  const box = document.createElement("div");
  const color = colorGeneration();
  box.style.cssText = `width:${size}px; height:${size}px; background-color: ${color}`;
  return box;
}

function createBoxes(amount) {
  const basicSize = 30;
  const arr = [];
  for (let i = 0; i <= amount; i++) {
    const size = basicSize + i * 10;
    arr.push(boxGeneration(size));
  }

  return boxes.append(...arr);
}

buttonRen.addEventListener("click", renderBoxes);
buttonDel.addEventListener("click", clearBoxes);
