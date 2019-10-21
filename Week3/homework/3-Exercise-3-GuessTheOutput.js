'use strict';

console.log('EXERCISE 3 - Guess the output');

// EXERCISE-3 =>
// 1=> In this exercise you'll be presented with a code snippet.
// 2=> Your task is to guess the output and write out your reasoning in 50 words or less.
// 3=> Snippet:

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
/*----------------------------------------------------------------
               EXPLANATION OF THE GIVEN CODE
-----------------------------------------------------------------*/

// First it declares "a" as a value of 10.
// Then it executes the x function.
// Because it is an IIFE (Immediately Invoked Function Expression).
// An IIFE is a JavaScript function that runs as soon as it is defined.
// (https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
// As we can see in the code, there are parenthesis after the function.
// So it is immediately executed.
// Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
// In the function "a" becomes 12. Because there isn't a let or const before the "a", in the function.
// Then the closure function starts execution. AKA, closure function remembers the value which it is inside of.
// Then alert pops up an it writes 12 in the browser.
// Alert is not defined in node.js, so we need to try this in browser.
