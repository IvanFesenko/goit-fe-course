const inputRef = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeControl = () => (text.style.fontSize = `${inputRef.value}px`);

inputRef.addEventListener("input", fontSizeControl);
