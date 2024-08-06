const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
