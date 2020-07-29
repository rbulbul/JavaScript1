'use strict';

// This is the number checker function
const numChecker = (cardNumber) => {
  let newArray = [];
  for (let i = 0; i < cardNumber.length; i++) {
    newArray.push(cardNumber[i]);
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
  } else if (selectNumber[selectNumber.length - 1] % 2 !== 0) {
    return `Final digit of the card number must be even.`;
  } else {
    // The sum of all the numbers must be greater than 16
    let total = 0;
    for (let i of selectNumber) {
      total += selectNumber[i];
    }
    if (total <= 16) {
      return `The sum of all the digits must be greater than 16`;
    }
  }

  // To check whether numbers in array is same
  let everyNumberIsSame = selectNumber.reduce(function (
    accumulator,
    currentValue,
  ) {
    return accumulator + currentValue;
  },
  0);
  if (everyNumberIsSame === selectNumber[0] * 16) {
    return `Error: INVALID Card Number! Your credit card number digits cannot be the same!`;
  }

  return `SUCCESS! YOUR CREDIT CARD NUMBER: ${cardNumber} IS VALID`;
};

// This function checks whether credit card number length has 16 character or not
const lengthChecker = (cardNumber) => {
  let charNum = cardNumber;
  if (charNum.length !== 16)
    return `Error: INVALID Card Number! Your credit card number must be 16 digits!`;
};

const validateCreditCardNumber = (cardNumber) => {
  // Input must be 16 characters
  return lengthChecker(cardNumber) || numChecker(cardNumber);
};

console.log(validateCreditCardNumber('1234567890123456')); // TRUE
console.log(validateCreditCardNumber('12345678901234567')); // Error: must be 16 digits.
console.log(validateCreditCardNumber('12345s7890m123d5')); // Error: all of the digits must be numbers.
console.log(validateCreditCardNumber('2222222222222222')); // Error: Digits cannot be the same.
console.log(validateCreditCardNumber('7575757575757575')); // Error: Card Number must be even.
console.log(validateCreditCardNumber('1111111111111110')); // Error: The sum of digits must be greater than 16.
