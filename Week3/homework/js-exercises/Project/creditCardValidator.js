'use strict';

// Creates new array in order to use it for the next part of program
const toArray = (numbersAsString) => {
  let newArray = [];
  for (let i = 0; i < numbersAsString.length; i++) {
    newArray.push(numbersAsString[i]);
  }
  return newArray;
};

// This function checks to see if sum of numbers is bigger than 16
const isBiggerThan16 = (cardNumber) => {
  // The sum of all the numbers must be greater than 16
  let total = 0;
  for (let i of cardNumber) {
    total += i;
  }
  if (total <= 16) {
    throw new Error(
      `Error: INVALID Card Number! The sum of all the digits must be greater than 16!`,
    );
  }
  return true;
};

// This is the number checker function. Converts string to number.
const verifyNumberStatus = (cardNumber) => {
  let newArray = toArray(cardNumber);

  // Here we convert array elements to numbers. If there is letter, then it returns NaN
  let numbersArr = newArray.map((item) => parseInt(item, 10));

  // Number.isNaN() method determines whether the passed value is NaN and its type is Number. We pick only numbers
  const onlyNumbersArr = numbersArr.filter((number) => !Number.isNaN(number));

  // To check whether numbers in array is same. If they are all same, then the result will be number multiply by 16.
  // Otherwise if there even one number different from other number, result will be different than above (number * 16)
  let everyNumberIsSame = onlyNumbersArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  if (everyNumberIsSame === onlyNumbersArr[0] * 16) {
    throw new Error(
      `Error: INVALID Card Number! Your credit card number digits cannot be the same!`,
    );
  }

  // Here we check other conditions. If there is no letter, then we can check length condition is equal for both.
  if (onlyNumbersArr.length !== newArray.length) {
    throw new Error(
      `Error: INVALID Card Number! All characters must be numbers!`,
    );
  } else if (onlyNumbersArr[onlyNumbersArr.length - 1] % 2 !== 0) {
    throw new Error(
      `Error: INVALID Card Number! Final digit of the card number must be even!`,
    );
  } else {
    return isBiggerThan16(onlyNumbersArr);
  }
};

// This function checks whether credit card number length has 16 character or not. Input must be 16 characters
const validateLength = (cardNumber) => {
  if (cardNumber.length !== 16) {
    throw new Error(
      `Error: INVALID Card Number! Your credit card number must be 16 digits!`,
    );
  }
  return true;
};

// Here is our main function that helps us to call it with argument
const validateCreditCardNumber = (cardNumber) => {
  try {
    if (validateLength(cardNumber) && verifyNumberStatus(cardNumber)) {
      return `SUCCESS! YOUR CREDIT CARD NUMBER: ${cardNumber} IS VALID`;
    }
  } catch (error) {
    return error.message;
  }
};

console.log(validateCreditCardNumber('1234567890123456')); // TRUE
console.log(validateCreditCardNumber('12345678901234567')); // Error: must be 16 digits.
console.log(validateCreditCardNumber('a92332119c011112')); // Error: all of the digits must be numbers.
console.log(validateCreditCardNumber('4444444444444444')); // Error: Digits cannot be the same.
console.log(validateCreditCardNumber('6666666666666661')); // Error: Card Number must be even.
console.log(validateCreditCardNumber('0000111111111112')); // Error: The sum of digits must be greater than 16.
