const priceRangebtn = document.getElementById("priceRange");
const amount = document.querySelector(".dollars");
priceRangebtn.addEventListener("input", () => {
  amount.innerHTML = (Number(priceRangebtn.value) / 100).toFixed(2);
});
