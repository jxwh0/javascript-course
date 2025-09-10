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

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Eyy ang BANGISS👌';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('.Masyadong OA sa TAAS');
    document.querySelector('.message').textContent = 'Masyadong OA sa TAAS!!🙀';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'ang BABA namern!!😒';
  }
});
