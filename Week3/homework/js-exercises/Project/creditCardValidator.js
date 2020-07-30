'use strict';

// This is the number checker function
const numChecker = (cardNumber) => {
  // Create array separate the string
  let newArray = [];
  for (let i = 0; i < cardNumber.length; i++) {
    newArray.push(cardNumber[i]);
  }

  // Return string to number
  let convertToNumber = newArray.map((item) => {
    return parseInt(item, 10);
  });

  // Number.isNaN() method determines whether the passed value is NaN and its type is Number
  const selectNumber = convertToNumber.filter(function (number) {
    return !Number.isNaN(number);
  });

  // Here if the length of selectNumber and newArray is equal to each other, then its valid. Otherwise it means some of them are NaN
  if (selectNumber.length !== newArray.length) {
    return `Error: INVALID Card Number! All characters must be numbers!`;
  } else if (selectNumber[selectNumber.length - 1] % 2 !== 0) {
    return `Error: INVALID Card Number! Final digit of the card number must be even!`;
  } else {
    // The sum of all the numbers must be greater than 16
    let total = 0;
    // for (let i of selectNumber) : When I used this loop method to check this '1111111111111114', total was not calculated. Why?
    // So I need to changed classic way of For loop
    for (let i = 0; i < selectNumber.length; i++) {
      total += selectNumber[i];
    }
    if (total <= 16) {
      return `Error: INVALID Card Number! The sum of all the digits must be greater than 16!`;
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
console.log(validateCreditCardNumber('2222222222222224')); // Error: all of the digits must be numbers.
console.log(validateCreditCardNumber('4444444444444444')); // Error: Digits cannot be the same.
console.log(validateCreditCardNumber('6666666666666661')); // Error: Card Number must be even.
console.log(validateCreditCardNumber('1111111111111110')); // Error: The sum of digits must be greater than 16.
