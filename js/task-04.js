const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const counterValue = document.querySelector("#value");

const decrementCounterValue = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

const incrementCounterValue = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtn.addEventListener("click", decrementCounterValue);
incrementBtn.addEventListener("click", incrementCounterValue);
