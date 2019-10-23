// Hides the result part when onload
document.querySelector('#result').style.display = 'none';

// Define The Tip Calculator Function

function calculateTip() {
  // DOM ELEMENTS
  const billAmount = document.querySelector('#billAmount').value;
  const serviceQuality = document.querySelector('#serviceQuality').value;
  let numberOfPeople = document.querySelector('#numberOfPeople').value;
  const each = document.querySelector('#each');
  const result = document.querySelector('#result');
  const output = document.querySelector('#output');

  // Calculates tip
  let total = (billAmount * serviceQuality) / numberOfPeople;
  total = (Math.floor(total * 100) / 100).toFixed(2);

  // checks the input value is valid or not
  if (billAmount === '' || numberOfPeople === '' || serviceQuality === 0) {
    alert('You need to fill in all the fields!');
    return;
  }

  // Checks the input value is empty or less than or equal to 1
  if (numberOfPeople === '' || numberOfPeople <= 1) {
    numberOfPeople = 1;
    each.style.display = 'none';
  } else {
    each.style.display = 'block';
  }

  // Displays the tip
  result.style.display = 'block';
  output.innerHTML = total;
}
// Find the element we want to event on
const calculateButton = document.getElementById('calculate');
// Add Event Listener => to execute the function when click the calculate button
calculateButton.addEventListener('click', calculateTip);
