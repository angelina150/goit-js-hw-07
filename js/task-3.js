const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
  const inputValue = inputEl.value.trim();
  spanEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
