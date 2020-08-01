let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let friends = 5; // if you make this 6 instead 5, you will see all friends will have the drinks
for (let i = 0; i < drinkTypes.length; i++) {
  drinkTray.push(drinkTypes[i]);
  drinkTray.push(drinkTypes[i]);
  if (i === drinkTypes.length - 1 && user % 2 !== 0) {
    drinkTray.pop();
  }
}
console.log('Hey guys, I brought a' + ' ' + drinkTray);
