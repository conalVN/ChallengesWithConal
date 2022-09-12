const percent = document.querySelector("input[type='range']");
const percentN = document.querySelector(".percent");
const bill = document.getElementById("bill");
const btnCalc = document.querySelector(".btn");
const result = document.querySelector(".result");

percent.addEventListener("input", (e) => {
  percentN.innerText = e.target.value + "%";
});
btnCalc.addEventListener("click", () => {
  calcTip();
});
function calcTip() {
  const valueBill = Number(bill.value);
  const valuePercent = Number(percent.value);

  const sum = valueBill + (valuePercent * valueBill) / 100;
  result.innerText = sum + "$";
}
