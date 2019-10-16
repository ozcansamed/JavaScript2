'use strict';

console.log('EXERCISE 5 - My Favorite Hobbies');

// EXERCISE-5 =>
// 1=> I've got a couple of hobbies that I want to showcase in a webpage.
// 2=> Write a program that outputs each of these inside an HTML file
// 3=> Create an HTML and JavaScript file, link them together
// 4=> Use the map and / or forEach function to put each hobby into a list item
// 5=> Output the list items in an unordered list

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

// Create an UL in body:
const newUl = document.createElement('ul');
// newUl.id = 'ul-list';
document.body.appendChild(newUl);

// ==FIRST METHOD==
myHobbies.forEach(hobby => {
  const newLi = document.createElement('li');
  newLi.className = 'hobbies-list';
  newUl.appendChild(newLi);
  newLi.textContent = hobby;
});

// ==SECOND METHOD==
// const hobbyListItems = myHobbies.map(hobby => {
//   const newLi = document.createElement('li');
//   newLi.className = 'hobbies-list';
//   newLi.textContent = hobby;
//   return newLi;
// });
// hobbyListItems.forEach(hobby => {
//   newUl.appendChild(hobby);
// });
