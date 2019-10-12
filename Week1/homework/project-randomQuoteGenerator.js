'use strict';

console.log('PROJECT-RANDOM QUOTE GENERATOR');

/* PROJECT-RANDOM QUOTE GENERATOR=>
1=> Include at least 1 JavaScript, CSS and HTML file
2=> The design should look similar to the one in the picture above
3=> Each time the button is clicked it should show a random quote
4=> Create a function that fires after the button click
5=> Collect 6 of your favorite quotes (quote and author) and store them in the right data structure. */

// collect 6 quotes with authors:
const myFavoriteQuotes = [
  'Even the darkest night will end and the sun will rise.',
  'All human wisdom is contained in these two words: Wait and Hope',
  'If you can dream it, you can do it.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced',
  'Let’s go invent tomorrow rather than worrying about what happened yesterday.',
];

const quoteAuthors = [
  'Victor HUGO',
  'Alexandre DUMAS',
  'Walt Disney',
  'Eleanor Roosevelt',
  'Vincent Willem van Gogh',
  'Steve Jobs',
];
// We can do this also by using  objects in the array.
/* const myFavoriteQuotes = [
  { quote:"",
    author: ""},
  { quote:"",
    author: ""},
  ]} */

// Find the element we want to event on:
const button = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

// Define the eventlistener function:
function pickRandomQuote() {
  const randomNumber = Math.floor(Math.random() * myFavoriteQuotes.length);

  quote.innerHTML = myFavoriteQuotes[randomNumber];
  author.innerHTML = '-' + quoteAuthors[randomNumber];
}

// Attach EventListener to element:
button.addEventListener('click', pickRandomQuote);
pickRandomQuote();
