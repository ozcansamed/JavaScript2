'use strict';

console.log('EXERCISE 3 - The Logo Hijack');

/* EXERCISE-3 =>
1=> Inside a JavaScript file, called hijackGoogleLogo.js, create a function called hijackGoogleLogo.
2=> Find out how to select the element that contains the Google logo, and store it in a variable
3=> Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead */

function hijackGoogleLogo() {
  const hyfLogo = document.getElementById('hplogo');
  hyfLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  hyfLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
