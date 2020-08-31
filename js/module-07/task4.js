const counterValue = document.querySelector("#value");

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

function decrement() {
  --counterValue.textContent;
}

function increment() {
  ++counterValue.textContent;
}

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);
