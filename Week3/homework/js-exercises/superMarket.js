'use strict';
let shoppingCart = ['bananas', 'milk'];
const addToShoppingCart = (item) => {
  shoppingCart.push(item);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  return `You bought ${shoppingCart[0]}, ${shoppingCart[1]}, ${shoppingCart[2]} !`;
};
console.log(addToShoppingCart('chocolate')); // Returns "You bought bananas, milk, chocolate!"
console.log(addToShoppingCart('waffles')); // Returns "You bought bananas, milk, chocolate!" */
console.log(addToShoppingCart('tea')); // Returns "You bought bananas, milk, chocolate!" */

for (let i = 0; i < shoppingCart.length; i++) {
  console.log(shoppingCart[i]);
}

/* for (let items of shoppingCart) {
  console.log(items);
} */
