'use strict';
/*
@author Mustafa Dincay
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = secretNumber; //this makes visible the secret number!
let score = 20;
let highscore = 0;
const displayText = (temps, message) => {
  document.querySelector(temps).textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = guess;
  if (!guess) {
    //document.querySelector('.message').textContent = 'There is no guess ⛔';
    displayText('.message', 'There is no guess ⛔');
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Your guess ${guess} is correct ✌`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '10rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high!📈`;
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.highscore').textContent = highscore;
      document.querySelector('body').style.backgroundColor = 'rgb(134, 13, 13)';
    } else {
      document.querySelector('.message').textContent = `You lost the game.😭`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!📉`;
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.highscore').textContent = highscore;
      document.querySelector('body').style.backgroundColor = 'rgb(13, 64, 160)';
    } else {
      document.querySelector('.message').textContent = `You lost the game.😭`;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.score').textContent = 0;
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.fontSize = '5rem';
  });
});
