/*      TO DO:
        1: Incorrect number.
        2:
        3:
        4:
        5:




*/


'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //No Valid Input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid input ⚠';
    //Score is between 1 and 20
  } else if (score <= 20 && score > 1) {
    //Currect guess
    if (guess >= 1 && guess <= 20 && guess === number) {
      document.querySelector('.message').textContent = '🎉 Currect Guess!';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.background = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      } else {
      }
      //Guess is higher than the Number
    } else if (guess >= 1 && guess <= 20 && guess > number) {
      document.querySelector('.message').textContent =
        'You may wanna guess a lower number 🤔';
      score--;
      document.querySelector('.score').textContent = score;
      //Guess is lower than the Number
    } else if (guess >= 1 && guess <= 20 && guess < number) {
      document.querySelector('.message').textContent =
        'You may wanna guess a higher number 🤔';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Score drops to 0.
  } else {
    document.querySelector('.message').textContent =
      'You have failed to guess! ☹';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.location.reload(); //The page will refresh with this function property!
});
