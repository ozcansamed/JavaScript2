'use strict';

console.log('EXERCISE 1 - Add Six');

// EXERCISE-1 =>
// 1=> Declare a function called createBase. It should return a closure,
// that adds a number to the base number argument.
// 2=> Call the function three times. The return values should be: 1. 15, 2. 24, 3. 36
// 3=> It should look a little like this:

function createBase(x) {
  return function addSix(y) {
    return x + y;
  };
}
// createBase returns us a function, so addSix is going to be a function.

const addNumber = createBase(9);

// Put here your function calls...
console.log(addNumber(6));
console.log(addNumber(15));
console.log(addNumber(27));
