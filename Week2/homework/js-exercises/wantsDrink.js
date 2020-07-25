'use strict';

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
  function counter(drink) {
    let count = 0;
    for (let elements of drinkTray) {
      if (elements === drink) {
        count = count + 1;
      }
    }
    return count;
  }

  let cola = counter(drinkTypes[0]);
  let lemonade = counter(drinkTypes[1]);

  if (cola < 2) {
    drinkTray.push(drinkTypes[0]);
  } else if (lemonade < 2) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
}
console.log(`“Hey guys, I brought a ${drinkTray}“`);

// This is another way to do this program
/* for (let i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.push(drinkTypes[0]);
  } else if (i === 2 || i < 4) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
}
console.log(drinkTray);
console.log(`“Hey guys, I brought a ${drinkTray}“`); */
