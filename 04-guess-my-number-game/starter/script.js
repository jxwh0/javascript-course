'use strict';
// constant variables
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI helper functions
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// game state
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

// reset function
function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

// initial render
function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}
renderInitialUI();

console.log('Secret Number:', secretNumber);
console.log('Game state initialized!');

// basic game logic
checkBtnEl.addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(guessInputEl.value);
  console.log('Player guessed:', guess);

  if (!guess) {
    setMessage('No number!');
    return;
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);
    return;
  }

  if (guess === secretNumber) {
    setMessage('🏆 ALA WINNERR! 🏆');
    setNumber(secretNumber);
    setBackground('green');
    disablePlay(true);

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
  } else {
    setMessage(
      guess > secretNumber
        ? 'Masyadong OA sa TAAS!! 🙀'
        : 'Ang BABA namern!! 😒'
    );
    score--;
    setScore(score);

    if (score < 1) {
      setMessage('Aww talo ka, ulit ka na lng 🥺');
      setNumber(secretNumber);
      disablePlay(true);
      setBackground('maroon');
    }
  }
});

// again button
againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  console.log('New secret number:', secretNumber);
});
