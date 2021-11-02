/// не проверяйте, не закончил, в процессе

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").querySelector("input"),
  createButtonEl: document.querySelector("button[data-create]"),
  destroyButtonEl: document.querySelector("button[data-destroy]"),
  controlEl: document.querySelector("#controls"),
};

refs.createButtonEl.addEventListener("click", createBoxes);

function createBoxes(event) {
  if (Number(refs.inputEl.value) > 0) {
    let aa = bb(Number(refs.inputEl.value));
    console.log(aa);
  }
}

function bb(num) {
  let step = 0;

  for (let i = 0; i < num; i += 1) {
    step += 10;
    let ii = getRandomHexColor();

    const ff = document.createElement("div");
    ff.style.width = `${step + 30}px`;
    ff.style.height = `${step + 30}px`;
    ff.style.backgroundColor = ii;

    refs.divEl.append(ff);
  }
}
