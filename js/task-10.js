function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBlockEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").querySelector("input"),
  createButtonEl: document.querySelector("button[data-create]"),
  destroyButtonEl: document.querySelector("button[data-destroy]"),
};
function createBoxes() {
  refs.divBlockEl.innerHTML = "";
  if (refs.inputEl.value === "") return;
  let arrayDivEL = [];
  let step = 10;

  for (let i = 0; i < Number(refs.inputEl.value); i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${step * i + 30}px`;
    divEl.style.height = `${step * i + 30}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrayDivEL.push(divEl);
  }
  refs.divBlockEl.append(...arrayDivEL);
}

refs.createButtonEl.addEventListener("click", createBoxes);
refs.destroyButtonEl.addEventListener("click", () => {
  refs.divBlockEl.innerHTML = "";
  refs.inputEl.value = "";
});
