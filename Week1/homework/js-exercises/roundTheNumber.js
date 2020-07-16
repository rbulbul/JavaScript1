//  === EXERCISE 5 : Round a number and log it ===
'use strict';

let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

let highest;
if (a > z) {
  highest = a;
} else {
  highest = z;
}

console.log(highest);

// var highest = Math.max(a, z);
