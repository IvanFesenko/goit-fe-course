const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

function insertName(event) {
  spanText.textContent =
    event.target.value === "" ? defaultText : event.target.value;
}

const defaultText = "незнакомец";

inputText.addEventListener("input", insertName);
