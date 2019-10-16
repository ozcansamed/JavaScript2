'use strict';

console.log('EXERCISE 1 - The Odd Ones Out');

// EXERCISE-1 =>
// 1=> Look at the following code snippet:

function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

// 2=> The doubleEvenNumbers function returns only the even numbers in the array myNumbers and doubles them.
// 3=> Like you've learned in the README, this block of code isn't easy to decipher. Let's rewrite it.
// 4=> Using the map and filter functions, rewrite the doubleEvenNumbers function.

console.log('REWRITE EXERCISE-1 with MAP and FILTER');
const doubleEvenNumbersWithMapAndFilter = myNumbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
console.log(doubleEvenNumbersWithMapAndFilter);
