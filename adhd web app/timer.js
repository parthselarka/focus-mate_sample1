let countdown;
let timerRunning = false;
let timeRemaining = 1500; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsDisplay = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;
  timerDisplay.textContent = formattedTime;
}

function startTimer() {
  if (!timerRunning) {
    countdown = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay(timeRemaining);
      } else {
        clearInterval(countdown);
        timerRunning = false;
        alert('Pomodoro session finished!');
      }
    }, 1000);

    timerRunning = true;
    startBtn.textContent = 'Pause';
  } else {
    clearInterval(countdown);
    timerRunning = false;
    startBtn.textContent = 'Resume';
  }
}

function resetTimer() {
  clearInterval(countdown);
  timerRunning = false;
  timeRemaining = 1500;
  updateDisplay(timeRemaining);
  startBtn.textContent = 'Start';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay(timeRemaining);
