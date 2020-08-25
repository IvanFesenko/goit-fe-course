const counterValue = document.querySelector("#value");

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

function decrement() {
  counterValue.textContent -= 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);
