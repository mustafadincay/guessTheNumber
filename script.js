'use strict';
/*console.log(document.querySelector('.message').textContent);*/

/*document.querySelector('.check').addEventListener('click', function () {
  let temp = document.querySelector('.guess').value;
  console.log(temp);
});*/

/*let temp = document.querySelector('.guess').value;*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = guess;
  if (!guess) {
    document.querySelector('.message').textContent = 'There is no guess ⛔';
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Your guess ${guess} is correct ✌`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '10rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high!📈`;
      score--;
      highscore--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('body').style.backgroundColor = 'rgb(134, 13, 13)';
    } else {
      document.querySelector('.message').textContent = `You lost the game.😭`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!📉`;
      score--;
      highscore--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('body').style.backgroundColor = 'rgb(13, 64, 160)';
    } else {
      document.querySelector('.message').textContent = `You lost the game.😭`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
