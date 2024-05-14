const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const change = document.querySelector("#counter");

let increment = 0;

plus.addEventListener("click", () => {
  increment++;

  change.textContent = increment;
});

minus.addEventListener("click", () => {
  if (increment < 0) {
    change.textContent = 0;
  } else {
    change.textContent = increment;
    increment--;
  }
});
