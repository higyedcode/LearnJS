const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];
let cartSummary;
let increasebtns = [];
let decreasebtns = [];
const empty = document.querySelector(".empty");
console.log(empty);
/*Add the menu elements dinamically */
const menu = document.querySelector("ul");
console.log(menu);
for (let i = 0; i < menuItems.length; i++) {
  const { name, price, image, alt, count } = menuItems[i];
  menu.innerHTML += `<li>
    <div class="plate">
      <img
        src="images/${image}"
        alt="${alt}"
        class="plate"
      />
    </div>
    <div class="content">
      <p class="menu-item">${name}</p>
      <p class="price">$${Math.floor(price / 100)}.${price % 100}</p>
      <button class="add">Add to Cart</button>
      <button class="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
              </button>
    </div>
  </li>`;
}
//Make the add To Cart functionality
cartSummary = document.querySelector(".cart-summary");
const addButtons = document.querySelectorAll(".add");

//add the HTML dinamycally
addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    empty.style.display = "none";
    // change buttons
    button.nextElementSibling.style.display = "flex";
    button.style.display = "none";
    // add buttons to cartSummary
    const { name, price, image, alt, count } = menuItems[index];
    cartSummary.innerHTML += `
                <li>
                <div class="plate">
                    <img
                    src="images/${image}"
                    alt="${alt}"
                    class="plate"
                    />
                    <div class="quantity">1</div>
                </div>
                <div class="content">
                    <p class="menu-item">${name}</p>
                    <p class="price">$${Math.floor(price / 100)}.${
      price % 100
    }</p>
                </div>
                <div class="quantity__wrapper">
                    <button class="decrease">
                    <img src="images/chevron.svg" />
                    </button>
                    <div class="quantity">1</div>
                    <button class="increase">
                    <img src="images/chevron.svg" />
                    </button>
                </div>
                <div class="subtotal">$${(price / 100).toFixed(2)}</div>
                </li>
                `;
    // cartSummary = cartAux.lastElementChild;
    // console.log(cartSummary);
    // const increaseButton = cartSummary.querySelector(".increase");
    // const decreaseButton = cartSummary.querySelector(".decrease");

    // increasebtns.push(increaseButton);
    // decreasebtns.push(decreaseButton);
    console.log((price / 100).toFixed(2));
    changeAmounts((price / 100).toFixed(2), true);
  });
});

cartSummary.addEventListener("click", (e) => {
  if (
    e.target &&
    (e.target.matches(".increase") ||
      e.target.parentElement.matches(".increase"))
  ) {
    let target;
    if (e.target.matches("img")) target = e.target.parentElement;
    else target = e.target;
    // console.log(target);
    // console.log(e.target.parentElement.parentElement);
    const listElement = target.parentElement.parentElement;
    const quantityAreas = listElement.querySelectorAll(".quantity");
    const subtotal = listElement.querySelector(".subtotal");
    const priceCartItem = listElement.querySelector(".price");
    quantityAreas.forEach((quantity) => {
      quantity.innerHTML++;
    });

    subtotal.innerHTML = `$${(
      Number(subtotal.innerHTML.substring(1)) +
      Number(priceCartItem.innerHTML.substring(1))
    ).toFixed(2)}`;
    changeAmounts(priceCartItem.innerHTML.substring(1), true);
  } else if (
    e.target &&
    (e.target.matches(".decrease") ||
      e.target.parentElement.matches(".decrease"))
  ) {
    let target;
    if (e.target.matches("img")) target = e.target.parentElement;
    else target = e.target;
    // console.log(target);
    // console.log(e.target.parentElement.parentElement);
    const listElement = target.parentElement.parentElement;
    const quantityAreas = listElement.querySelectorAll(".quantity");
    const subtotal = listElement.querySelector(".subtotal");
    const priceCartItem = listElement.querySelector(".price");
    if (quantityAreas[0].innerHTML > 0) {
      quantityAreas.forEach((quantity) => {
        quantity.innerHTML--;
      });
      subtotal.innerHTML = `$${(
        Number(subtotal.innerHTML.substring(1)) -
        Number(priceCartItem.innerHTML.substring(1))
      ).toFixed(2)}`;
      changeAmounts(priceCartItem.innerHTML.substring(1), false);
    }
    if (quantityAreas[0].innerHTML == 0) {
      listElement.remove();
      let price = (
        Number(priceCartItem.innerHTML.substring(1)) * 100
      ).toFixed();
      console.log(price);
      let i;
      for (i = 0; i < menuItems.length; i++)
        if (menuItems[i].price == price) break;
      addButtons[i].nextElementSibling.style.display = "none";
      addButtons[i].style.display = "flex";
      if (cartSummary.children.length == 0) {
        empty.style.display = "flex";
      }
    }
  }
});

// const quantityAreas = cartSummary.querySelectorAll(".quantity");
// const subtotal = cartSummary.querySelector(".subtotal");
// const priceCartItem = cartSummary.querySelector(".price");
// increaseButton.addEventListener("click", () => {
//     quantityAreas.forEach((quantity) => {
//       quantity.innerHTML++;
//     });

//     subtotal.innerHTML = `$${(
//       Number(subtotal.innerHTML.substring(1)) +
//       Number(priceCartItem.innerHTML.substring(1))
//     ).toFixed(2)}`;
//     changeAmounts(true);
//   });

//   decreaseButton.addEventListener("click", () => {
//     if (quantityAreas[0].innerHTML > 0) {
//       quantityAreas.forEach((quantity) => {
//         quantity.innerHTML--;
//       });
//       subtotal.innerHTML = `$${(
//         Number(subtotal.innerHTML.substring(1)) -
//         Number(priceCartItem.innerHTML.substring(1))
//       ).toFixed(2)}`;
//       changeAmounts(false);
//     }
//   });
function changeAmounts(price, sign) {
  const finalCalculations = document.querySelector(".totals");
  const subtotalFinal = finalCalculations.querySelector(".subtotal");
  const taxFinal = finalCalculations.querySelector(".tax");
  const totalFinal = finalCalculations.querySelector(".total .amount");
  if (sign) {
    subtotalFinal.innerHTML = `$${(
      Number(subtotalFinal.innerHTML.substring(1)) + Number(price)
    ).toFixed(2)}`;
  } else {
    subtotalFinal.innerHTML = `$${(
      Number(subtotalFinal.innerHTML.substring(1)) - Number(price)
    ).toFixed(2)}`;
  }
  taxFinal.innerHTML = `$${(
    Number(subtotalFinal.innerHTML.substring(1)) * 0.0975
  ).toFixed(2)}`;
  totalFinal.innerHTML = `$${(
    Number(subtotalFinal.innerHTML.substring(1)) +
    Number(taxFinal.innerHTML.substring(1))
  ).toFixed(2)}`;
}
