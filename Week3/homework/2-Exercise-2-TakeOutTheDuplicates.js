'use strict';

console.log('EXERCISE 2 - Take out the duplicates');

// EXERCISE-2 =>
// 1=> Write a function called removeDuplicates, that takes in an array as an argument:
// 2=> const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// 3=> The function should remove duplicate letters. So the result should be:
// 4=> letters === ['a', 'b', 'c', 'd', 'e', 'f'];

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const removeDuplicates = arr => {
  const seen = {};
  return arr.filter(item => (seen.hasOwnProperty(item) ? false : (seen[item] = true)));
};
console.log(removeDuplicates(letters));
