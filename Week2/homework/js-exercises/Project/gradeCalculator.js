'use strict';

const calculateGrades = (grade) => {
  let gradeCalc = grade;
  // Uses if statement to check valid grade
  if (gradeCalc >= 0 && gradeCalc <= 100) {
    // here we start with if statement to check which grade should be fit to our student
    let grade;
    if (gradeCalc >= 90) {
      grade = 'A';
    } else if (gradeCalc >= 80) {
      grade = 'B';
    } else if (gradeCalc >= 70) {
      grade = 'C';
    } else if (gradeCalc >= 60) {
      grade = 'D';
    } else if (gradeCalc >= 50) {
      grade = 'E';
    } else {
      grade = 'F';
    }
    return `You got a ${grade} (${gradeCalc}%)!`;
  } else {
    // this else statement helps us to show error message when user input the value if it's wrong
    return 'Please type valid grade!';
  }
};

console.log(calculateGrades(100));
console.log(calculateGrades(89));
console.log(calculateGrades(79));
console.log(calculateGrades(69));
console.log(calculateGrades(59));
console.log(calculateGrades(49));
