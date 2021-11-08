// /// не проверяйте, не закончил, в процессе

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBlockEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").querySelector("input"),
  createButtonEl: document.querySelector("button[data-create]"),
  destroyButtonEl: document.querySelector("button[data-destroy]"),
  controlEl: document.querySelector("#controls"),
};
//let numberDivEl = Number(refs.inputEl.textContent);
// // let El = 0;
// // refs.inputEl.addEventListener("input", (event) => {
// //   console.log(event.currentTarget.value);
// //   console.log(refs.inputEl.value);
// // });

// //   alert(Number(refs.inputEl.textContent))
// // );
// //alert(numberDivEl);
// //refs.createButtonEl.addEventListener("click", createBoxes);

// // function createBoxes(event) {
// //   if (Number(refs.inputEl.value) > 0) {
// //     alert(event);
// //     let aa = bb(Number(refs.inputEl.value));
// //   }
// // }

// // function bb(num) {
// //   let step = 0;

// //   for (let i = 0; i < num; i += 1) {
// //     step += 10;
// //     let ii = getRandomHexColor();
// //const b = () => alert("1b");
// //     const ff = document.createElement("div");
// //     ff.style.width = `${step + 30}px`;
// //     ff.style.height = `${step + 30}px`;
// //     ff.style.backgroundColor = ii;

// //     refs.divEl.append(ff);
// //   }
// // }

// const createBoxes = (event) => {
//   event.preventDefault();
//   //alert(event.currentTarget.elements);
//   let df = refs.inputEl.addEventListener("input", (event) => {
//     event.preventDefault();
//     //console.log(event.currentTarget.value);
//     refs.inputEl.value;
//   });
//   alert(df);

//   const divElem1 = document.createElement("div");
//   divElem1.style.width = "30px";
//   divElem1.style.height = "30px";
//   divElem1.style.backgroundColor = getRandomHexColor();
//   console.log(divElem1);
//   //console.log(event.currentTarget);
//   //   return divElem1;
// };
// const dd = refs.createButtonEl.addEventListener("click", createBoxes);

// //.style.transform = 'translateY('+(ev.clientY-25)+'px)';
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const createBoxes = (numberDivEl) => {
//   alert("555555" + numberDivEl);
// };
//   event.preventDefault();
//   //alert(event.currentTarget.elements);
//   let df = refs.inputEl.addEventListener("input", (event) => {
//     event.preventDefault();
//     //console.log(event.currentTarget.value);
//     refs.inputEl.value;
//   });
//   alert(df);

// let tt = refs.inputEl.addEventListener("input", (event) => {
//   let numberDivEl = event.currentTarget.value;
//   return numberDivEl;
// });

// let hh = refs.inputEl.addEventListener(
//   "input",
//   (event) => (hh = event.currentTarget.value)
// );
/////////////..............................................
// refs.createButtonEl.addEventListener("click", createBoxes);

// function createBoxes() {
//   let sd = [];
//   let step = 10;
//   for (let i = 0; i < Number(refs.inputEl.value); i += 1) {
//     let colorBrend = getRandomHexColor();

//     const divEl = document.createElement("div");
//     divEl.style.width = `${step * i + 30}px`;
//     divEl.style.height = `${step * i + 30}px`;
//     divEl.style.backgroundColor = colorBrend;
//     sd.push(divEl);
//   }
//   console.log(sd);
//   refs.divBlockEl.append(...sd);
// }
//////////----------------------------------
refs.createButtonEl.addEventListener("click", createBoxes);

function createBoxes() {
  let sd = {
    width: "30px",
    height: "30px",
    RandomHexColor: getRandomHexColor(),
  };

  // const itemImageGallery = sd
  //   .map(
  //     (
  //       item
  //     ) => `<li><img src=${item.url} alt="${item.alt}" width= 100% height= 100% object-fit=  cover
  //  /></li>`
  //   )
  //   .join("");

  // ListImagesGalleryEl.insertAdjacentHTML("afterbegin", itemImageGallery);

  //   let step = 10;
  //   for (let i = 0; i < Number(refs.inputEl.value); i += 1) {
  //     let colorBrend = getRandomHexColor();

  //     const divEl = document.createElement("div");
  //     divEl.style.width = `${step * i + 30}px`;
  //     divEl.style.height = `${step * i + 30}px`;
  //     divEl.style.backgroundColor = colorBrend;
  //     sd.push(divEl);
  //   }
  console.log(sd);
  //   refs.divBlockEl.append(...sd);
}
