const tip = document.getElementById("tip-amount");
const total = document.getElementById("total-per-person");
const bill = document.getElementById("bill-amount");
const nr = document.getElementById("number-of-people");
const tipsBtns = document.querySelectorAll("input[name='tip']");
const calculateBtn = document.getElementById("calculate");

console.log(tipsBtns);

calculateBtn.addEventListener("click", () => {
  let i, nrPeople, billAmount;
  for (i = 0; i < tipsBtns.length; i++) if (tipsBtns[i].checked == true) break;
  nrPeople = Number(nr.value);
  billAmount = Number(bill.value);
  total.innerText = (billAmount / nrPeople).toFixed(2);
  tip.innerText = (
    (billAmount * (Number(tipsBtns[i].value.slice(0, -1)) / 100)) /
    nrPeople
  ).toFixed(2);
});
