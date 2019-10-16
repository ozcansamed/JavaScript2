'use strict';

console.log('EXERCISE 3 - Lemon Allergy');

// EXERCISE-3 =>
// 1=> Your mom bought you a basket of fruit, because you're doing so well in HackYourFuture. How sweet of her!

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

// 2=> However, she forgot that you are allergic to lemons! Let's quickly dispose of them before you get an attack.
// 3=> Write a function
// 4=> Use the filter array function to take out the lemons
// 5=> Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

const isNotLemon = fruit => fruit !== 'Lemon';
const filterAndPrintBasket = basketOfFruits => {
  const screenedFruitBasket = basketOfFruits.filter(isNotLemon);
  console.log(`My mom bought me a fruit basket, containing ${screenedFruitBasket}.`);
};
filterAndPrintBasket(fruitBasket);
