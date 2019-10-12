'use strict';

console.log("EXERCISE 4 - What's the time?");

/* EXERCISE-4 =>
1=> Create an empty HTML file, called time.html
2=> Create a JavaScript file called showCurrentTime.js and include it in the HTML file
3=> Inside the JS file, write a function that adds the current time to the webpage. 
Make sure it's written in the HH:MM:SS notation (hour, minute, second). 
Hint: use setInterval() to make sure the time stays current
4=> Have the function execute when it's loading in the browser */

// STEP-1=> Find the element we want to listen on:
const currentTime = document.getElementById('time');

// STEP-2=> Define the Event Listener Function:
function showCurrentTime() {
  const now = new Date(); // for now

  let hour = now.getHours(); // => 9
  if (hour < 10) {
    hour = '0' + hour; // When the hour is one digit, add 0 to front
  }

  let minute = now.getMinutes(); // =>  30
  if (minute < 10) {
    minute = '0' + minute; // When the minute is one digit, add 0 to front
  }

  let second = now.getSeconds(); // =>  51
  if (second < 10) {
    second = '0' + second; // When the second is one digit, add 0 to front
  }

  // Add the time to our element in the page
  currentTime.innerHTML = hour + ':' + minute + ':' + second;
}

// STEP-3=> Execute when loading the browser:
window.onload = setInterval(showCurrentTime, 1000);
