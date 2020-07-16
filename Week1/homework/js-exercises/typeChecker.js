//  === EXERCISE 8 : Type checker ===
'use strict';

function typeCheckers(arg1, arg2) {
  /*   let a = typeof arg1;
  let b = typeof arg2; */

  if (typeof arg1 === typeof arg2) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }
}

/* typeCheckers('Ramazan', 'ali');
typeCheckers('Ramazan', 5); */

let myFirstObj = { type: 'Fiat' };
let mySecondObj = { model: '500' };
let myFirstStr = 'Ramazan';
let mySecondStr = 'Bulbul';

typeCheckers(myFirstObj, mySecondObj);
typeCheckers(myFirstObj, myFirstStr);
typeCheckers(myFirstObj, mySecondStr);
typeCheckers(mySecondObj, myFirstStr);
typeCheckers(mySecondObj, mySecondStr);
typeCheckers(myFirstStr, mySecondStr);
