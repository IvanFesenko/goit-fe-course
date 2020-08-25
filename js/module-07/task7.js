const inputRef = document.querySelector("#font-size-control");

const fontSizeControl = () =>
  (document.querySelector("#text").style.fontSize = `${inputRef.value}px`);

inputRef.addEventListener("input", fontSizeControl);
