'use strict';

//Elements Selection
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const winner1 = document.getElementById('name--0');
const winner2 = document.getElementById('name--1');

//Game initial Conditions
let totalScores, currentScore, activeDreamer, isPlaying;

let initPlaying = function () {
  totalScores = [0, 0];
  currentScore = 0;
  activeDreamer = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  isPlaying = true;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.remove('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.add('player--active');

  diceElement.classList.add('hidden');
  winner1.textContent = 'Dreamer 1';
  winner2.textContent = 'Dreamer 2';
};
initPlaying();
const switvhActiveDreamer = function () {
  currentScore = 0;
  document.getElementById(`current--${activeDreamer}`).textContent =
    currentScore;
  activeDreamer = activeDreamer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceElement.classList.remove('hidden');
    diceElement.src = `./img/dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activeDreamer}`).textContent =
        currentScore;
    } else {
      switvhActiveDreamer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    totalScores[activeDreamer] += currentScore;
    document.getElementById(`score--${activeDreamer}`).textContent =
      totalScores[activeDreamer];
    if (totalScores[activeDreamer] >= 10) {
      document.querySelector('.dice').classList.add('hidden');
      isPlaying = false;
      document.getElementById(`name--${activeDreamer}`).textContent = 'Winner';
      document
        .querySelector(`.player--${activeDreamer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeDreamer}`)
        .classList.remove('player--active');
      // alert('We have the WINNER!');
    } else {
      switvhActiveDreamer;
    }
    switvhActiveDreamer();
  }
});
btnNew.addEventListener('click', initPlaying);
