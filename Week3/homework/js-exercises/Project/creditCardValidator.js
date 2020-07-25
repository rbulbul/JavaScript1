'use strict';

const validateCreditNumber = (array) => {
  let total = 0;
  const letterNumber = /^[0-9a-zA-Z]+$/;
  let newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray.length !== 16) {
      return 'Input must be 16 characters';
    } else if (isNaN(array)) {
      return 'All characters must be numbers';
    } else if (array[array.length - 1] % 2 !== 0) {
      return 'The last number must be even';
    }
    total += newArray[i];
  }
  if (total > 16) {
    return 'valid';
  } else {
    return 'invalid';
  }
};

console.log(validateCreditNumber('1111111111111110'));
