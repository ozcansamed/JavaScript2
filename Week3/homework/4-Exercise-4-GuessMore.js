'use strict';

console.log('EXERCISE 4 - Guess more');

// EXERCISE-4 =>
// 1=> In this exercise you'll be presented with another code snippet.
// 2=> Guess the output and write out your reasoning in 50 words or less.
// 3=> Snippet:

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/* ----------------------------------------------------------------
               EXPLANATION OF THE GIVEN CODE
-----------------------------------------------------------------*/

/* -------------------- FIRST CODE------------------------------- */

// The f1 function takes "x" as an argument, and the first value of "x" is 9.
// Then when executing the f1 function "x" becomes 10.
// But the value of "x" didn't change, the output is "9".
// If we want to change it, we need to use pass by reference, like the second code.
// Because; being passed by value means it will make a copy
// And if you change inside, the outside wouldn't get reflected.
// Therefore it didn't change. Because it didn't reflected.
// So the output will be "9".

/* -------------------- SECOND CODE------------------------------- */

// In this code we are mutating the value of "x" by using "val.x"
// "x" is being passed by reference.
// If you're passing a value into a function by reference,
// and change the value inside the function,
// the change gets reflected to the variable outside.
// When you assign a value to a variable,
// it actually holds the address of where this is stored.
// so it has a reference to the address.
// The value of "x" will be 10 by incrementing it.
// Therefore the return value will be { x: 10 } in the function(y).
// And passing by reference, -when we mutate the value of "y" in the function-,
// it reflected the value to "y".
// So the value of "y" will be { x: 10 }.
// https://www.youtube.com/watch?v=E-dAnFdq8k8
