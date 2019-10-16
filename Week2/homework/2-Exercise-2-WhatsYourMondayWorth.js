'use strict';

console.log("EXERCISE 2 - What's Your Monday Worth?");

// EXERCISE-2 =>
// 1=> When you're a developer at a big company your Monday could look something like this:

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

// 2=> Let's assume your hourly rate is €25. How much would you earn on that day?
// 3=> Write a program that finds out what your hourly rate on a Monday would be
// 4=> Use the map array function to take out the duration time for each task.
// 5=> Multiply each duration by a per - hour rate for billing and sum it all up.
// 6=> Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
// 7=> Make sure the program can be used on any array of objects that contain a duration property with a number value.

const durations = mondayTasks.map(event => event.duration);
console.log(durations);
const hourlyIncomes = durations.map(durationInMinutes => (durationInMinutes / 60) * 25);
console.log(hourlyIncomes);
const totalIncome = hourlyIncomes.reduce((total, hourlyIncome) => total + hourlyIncome, 0);
console.log('You earn ' + totalIncome.toFixed(2) + '€ every Monday.');
