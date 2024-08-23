'use strict';

let correctNumber = Math.trunc(Math.random() * 21);

let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (score == 0) {
    document.querySelector('.score').textContent = 0;
  }

  if (!guess) {
    displayMessage('Enter a Number NIGGA !');
  } else if (guess !== correctNumber) {
    if (score > 1) {
      displayMessage(guess < correctNumber ? 'Too Low ! 🔴' : 'Too High ! 🔴');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost Nigga ⚠️');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess === correctNumber) {
    document.querySelector('.message').textContent = 'Correct ! 🟩';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = correctNumber;
    score++;
    document.querySelector('.score').textContent = score;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').value = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  //   ===================
  document.querySelector('body').style.backgroundColor = '#222';
  //   ===================

  displayMessage('Start guessing...');
  // ===================
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // ===============
  document.querySelector('.guess').value = '';

  correctNumber = Math.trunc(Math.random() * 21);
});
