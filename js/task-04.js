const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");

let incrementDecrement = 0;

incrementBtn.addEventListener(
  "click",
  () => (counterValue.textContent = incrementDecrement += 1)
);

decrementBtn.addEventListener(
  "click",
  () => (counterValue.textContent = incrementDecrement -= 1)
);
