'use strict';

const calculateDogAge = (age, name = 'Puppy') => {
  let dogAge = age * 7;
  const dogName = name.toUpperCase();
  const dogText = `My name is ${dogName}. I am ${age} years old in human years which is ${dogAge} years old in dog years`;
  return dogText;
};
console.log(calculateDogAge(1, 'Buddy'));
console.log(calculateDogAge(2, 'Max'));
console.log(calculateDogAge(3));
