const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
  console.log(textInput);
});

// const addClass = (oldClas, newClas) => {
//   if (inputText.classList.contains(oldClas))
//     return inputText.classList.replace(oldClas, newClas);
//   inputText.classList.add(newClas);
// };
// inputText.addEventListener("blur", () => {
//   inputText.value.length === +inputText.dataset.length
//     ? addClass("invalid", "valid")
//     : addClass("valid", "invalid");
// });
