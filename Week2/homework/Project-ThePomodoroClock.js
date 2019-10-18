'use strict';

// 1=> In this week's project you'll be making a Pomodoro Clock!
// 2=> A user can specify how many minutes the timer should be set,
// and with a click on the play button it starts counting down!
// 3=> If the user wants to pause the timer, they can do so by clicking the pause button.
// 4=> It should look like this:
// 5=> If the timer is running, the user can't change the session length anymore
// 6=> Use at least 3 functions
// 7=> Display minutes and seconds
// 8=> If the timer finishes the timer should be replaced by the message: Time's up!
{
  // DOM elements
  const btnDown = document.getElementById('down');
  const btnUp = document.getElementById('up');
  const btnStart = document.getElementById('start');
  const btnPause = document.getElementById('pause');
  const spanSession = document.getElementById('session');
  const pTimer = document.getElementById('timer');

  // The variable that checks whether the timer is already started or not.
  // Also will be used to stop the timer with the help of clearInterval.
  // NaN is given in the first place because this value will be changed by setInterval.
  // And it will be different from NaN and we can check if it was changed or not.
  let timerInterval = NaN;

  // Gets the timer string from DOM which has a format such as 00:00
  // Changes it to all the seconds it contains and returns it for future use.
  function getSeconds() {
    const times = pTimer.textContent.split(':');
    return parseInt(times[0], 10) * 60 + parseInt(times[1], 10);
  }

  // Takes a second argument and changes it to a format such as 00:00
  // And display the formatted string in the DOM.
  function setMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    pTimer.textContent = `${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  // Checks if timer is started if not changes the session number by decreasing 1.
  // Minimum value 0.
  btnDown.addEventListener('click', () => {
    if (Number.isNaN(timerInterval)) {
      let sessionValue = parseInt(spanSession.textContent, 10);
      if (sessionValue > 0) {
        spanSession.textContent = --sessionValue;
      }
      setMinutesAndSeconds(sessionValue * 60);
    }
  });

  // Checks if timer is started if not changes the session number by increasing 1.
  // Maximum value 60.
  btnUp.addEventListener('click', () => {
    if (Number.isNaN(timerInterval)) {
      let sessionValue = parseInt(spanSession.textContent, 10);
      if (sessionValue < 60) {
        spanSession.textContent = ++sessionValue;
      }
      setMinutesAndSeconds(sessionValue * 60);
    }
  });

  // Checks if the timer is started if not starts it.
  btnStart.addEventListener('click', () => {
    if (Number.isNaN(timerInterval)) {
      timerInterval = setInterval(() => {
        const seconds = getSeconds();
        if (seconds === 0) {
          pTimer.textContent = `Time's up!`;
          clearInterval(timerInterval);
          timerInterval = NaN;
        } else {
          setMinutesAndSeconds(seconds - 1);
        }
      }, 1000);
    }
  });

  // Stops the timer.
  btnPause.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = NaN;
  });
}
