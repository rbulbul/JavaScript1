let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < drinkTypes.length; i++) {
  drinkTray.push(drinkTypes[i]);
  drinkTray.push(drinkTypes[i]);
  if (i === drinkTypes.length - 1) {
    drinkTray.pop();
  }
}
console.log('Hey guys, I brought a' + ' ' + drinkTray);
