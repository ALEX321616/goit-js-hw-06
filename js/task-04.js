const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");

const incrementDecrement = Number(1);

incrementBtn.addEventListener(
  "click",
  () =>
    (counterValue.textContent =
      Number(counterValue.textContent) + incrementDecrement)
);
decrementBtn.addEventListener(
  "click",
  () =>
    (counterValue.textContent =
      Number(counterValue.textContent) - incrementDecrement)
);
