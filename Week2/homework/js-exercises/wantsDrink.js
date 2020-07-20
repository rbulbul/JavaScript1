/* let drinkTray = [];
  for (i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.push('cola');
  } else if (i === 2 || i < 4) {
    drinkTray.push('lemonade');
  } else {
    drinkTray.push('water');
  }
}
console.log(drinkTray); */

let drinkTray = [];
for (i = 0; i < 5; i++) {
  function counter(drink) {
    let count = 0;
    for (elements of drinkTray) {
      if (elements === drink) {
        count = count + 1;
      }
    }
    return count;
  }

  let cola = counter('cola');
  let lemonade = counter('lemonade');

  if (cola < 2) {
    drinkTray.push('cola');
  } else if (lemonade < 2) {
    drinkTray.push('lemonade');
  } else {
    drinkTray.push('water');
  }
}
console.log(`“Hey guys, I brought a ${drinkTray}“`);
