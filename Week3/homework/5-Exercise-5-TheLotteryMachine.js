'use strict';

console.log('EXERCISE 5 - The lottery machine');

// EXERCISE-5 =>
// 1=> Don't you just love the thrill of the lottery?
// 2=> What if I told you we can make our own lottery machine? Let's get started!
// 3=> Write a function that takes 4 arguments.
// a) A start value
// b) An end value
// c) A callback that executes if the number is divisible by 3
// d) A callback that executes if the number is divisible by 5
// 4=> The function should first generate an array containing values from start value to end value (inclusive).
// 5=> Then the function should take the newly created array and iterate over it,
// and calling the first callback if the array value is divisible by 3.
// 6=> The function should call the second callback if the array value is divisible by 5.
// 7=> Both functions should be called if the array value is divisible by both 3 and 5.

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  console.log(numbers);

  for (const number of numbers) {
    threeCallback(number);
    fiveCallback(number);
  }
}

const sayThree = number => {
  if (number % 3 === 0) {
    return console.log(`Your number ${number} is divisible by 3`);
  }
};
const sayFive = number => {
  if (number % 5 === 0) {
    return console.log(`Your number ${number} is divisible by 5`);
  }
};

threeFive(10, 15, sayThree, sayFive);
threeFive(17, 33, sayThree, sayFive);
