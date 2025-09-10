'use strict';

/// Dom element selection
const messageE1 = document.querySelector('.message');
console.log(messageE1);
console.log(messageE1.textContent);
//messageE1.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = '15';

const highscoreE1 = document.querySelector('.highscore');
// highscoreE1.textContent = '100';

const guessE1 = document.querySelector('.guess');
// guessE1.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

// track the current score
let score = 20;
let highscore = 0;
//change the value of score UI duynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

//Basic game logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button is clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  // ---------------------------
  // Input validation
  // ---------------------------

  // 1) Missing input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; // stop here
  }

  // 2) Out of range
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }

  // ---------------------------
  // Game logic
  // ---------------------------
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Eyy ang BANGISS👌';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.message').textContent = '🏆ALA WINNERR!🏆';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('.Masyadong OA sa TAAS');
    document.querySelector('.message').textContent = 'Masyadong OA sa TAAS!!🙀';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.message').textContent =
        'Aww talo ka, ulit ka na lng🥺';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'ang BABA namern!!😒';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.message').textContent =
        'Aww talo ka, ulit ka na lng🥺';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
    }
  }
});

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  // restart message display
  document.querySelector('.message').textContent = 'Start guessing...';
  // restart question mark
  document.querySelector('.number').textContent = '?';
  // update score
  document.querySelector('.score').textContent = score;
  // restart guess input value
  document.querySelector('.guess').value = '';

  // re-enable inputs
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;

  // reset background color
  document.body.style.backgroundColor = '';
});
