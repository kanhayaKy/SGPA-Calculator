let form = document.querySelector(".marks-form");
let reset = document.querySelector("#reset");
let submit = document.querySelector("#submit");
let output = document.querySelector(".output");
let results = document.querySelector(".results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let sub2 = parseInt(form.elements["sub2"].value[0]) + 1 || 0;
  let sub3 = parseInt(form.elements["sub3"].value[0]) + 1 || 0;
  let sub1 = parseInt(form.elements["sub1"].value[0]) + 1 || 0;
  let sub4 = parseInt(form.elements["sub4"].value[0]) + 1 || 0;
  let sub5 = parseInt(form.elements["sub5"].value[0]) + 1 || 0;
  let sub6 = parseInt(form.elements["sub6"].value[0]) + 1 || 0;
  let sub7 = parseInt(form.elements["sub7"].value[0]) + 1 || 0;
  let lab1 = parseInt(form.elements["lab1"].value[0]) + 1 || 0;
  let lab2 = parseInt(form.elements["lab2"].value[0]) + 1 || 0;
  console.log(sub1, sub2, sub3, sub4, sub5, sub6, sub7, lab1, lab2);
  let Total =
    3 * (sub1 + sub4 + sub5 + sub6) +
    4 * (sub2 + sub3) +
    2 * (lab1 + lab2) +
    sub7;
  let c = 3 * 4 + 4 * 2 + 2 * 2 + 1;
  let sgpa = Total / c;
  console.log(sgpa, Total, c);
  output.style.display = "block";
  results.innerHTML = sgpa;
});

reset.addEventListener("click", () => {
  form.reset();
  output.style.display = "none";
});
