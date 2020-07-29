'use strict';

// This is the number checker function
const numChecker = (param) => {
  let newArray = [];
  for (let i = 0; i < param.length; i++) {
    newArray.push(param[i]);
  }

  let convertToNumber = newArray.map((item) => {
    return parseInt(item, 10);
  });

  // Number.isNaN() method determines whether the passed value is NaN and its type is Number
  const selectNumber = convertToNumber.filter(function (number) {
    return !Number.isNaN(number);
  });

  if (selectNumber.length !== newArray.length) {
    return `Error: INVALID Card Number! All characters must be numbers!`;
  } else {
    return `valid`;
  }
};

// This function checks whether credit card number length has 16 character or not
const lengthChecker = (cardNumber) => {
  let charNum = cardNumber;
  if (charNum.length !== 16)
    return `Error: INVALID Card Number! Your credit card number must be 16 digits!`;
};

const validateCreditNumber = (cardNumber) => {
  // Input must be 16 characters
  return lengthChecker(cardNumber) || numChecker(cardNumber);
};

// At least two different numbers should be represented

//The sum of all the numbers must be greater than 16

console.log(validateCreditNumber('11111111111111aa'));
