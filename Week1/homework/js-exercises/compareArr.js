//  === EXERCISE 10 : Compare Arrays ===
'use strict';

var firstArr = [
  'Hello World!',
  'The Meaning of life: ',
  '42',
  'This is awesome!',
];
var secondArr = [
  'hello',
  123,
  true,
  { name: 'Ramazan', last_name: 'BULBUL' },
  '123',
  null,
  'HackYourFuture',
];

console.log('The length of the array is' + ' ' + firstArr.length); // output is 4
console.log('The length of the array is' + ' ' + secondArr.length); // output is 7

if (firstArr.length == secondArr.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}
