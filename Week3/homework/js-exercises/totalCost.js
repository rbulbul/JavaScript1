'use strict';
let cartForParty = {
  milk: 5.75,
  cheese: 6.25,
  cucumber: 0.99,
  tomato: 1.98,
  beef: 6.99,
};

/* const calculateTotalPrice = (shoppingCart) => {
  let total = 0;
  for (let item = 0; item < shoppingCart.length; item++) {
    total += shoppingCart[item];
  }
  return total;
};
 */

const calculateTotalPrice = (shoppingCart) => {
  let total = 0;
  for (let item in shoppingCart) {
    total += shoppingCart[item];
  }
  return `Total: €${total}`;
};

console.log(calculateTotalPrice(cartForParty));
