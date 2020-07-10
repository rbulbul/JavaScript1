//  === EXERCISE 8 : Type checker ===

function typeCheckers(arg1, arg2) {
  var a = typeof arg1;
  var b = typeof arg2;

  if (a === b) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }
}

/* typeCheckers('Ramazan', 'ali');
typeCheckers('Ramazan', 5); */

var myFirstObj = { type: 'Fiat' };
var mySecondObj = { model: '500' };
var myFirstStr = 'Ramazan';
var mySecondStr = 'Bulbul';

typeCheckers(myFirstObj, mySecondStr);
typeCheckers(myFirstStr, mySecondObj);
