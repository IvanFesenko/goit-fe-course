const input = document.querySelector("#validation-input");

console.log("validationLength :>> ", input.dataset.length);

const validator = () =>
  input.value.length >= input.dataset.length
    ? input.classList.remove("invalid") || input.classList.add("valid")
    : input.classList.add("invalid");

input.addEventListener("blur", validator);
