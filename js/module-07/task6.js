const input = document.querySelector("#validation-input");

const validator = () => {
  if (input.value.length === +input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", validator);
