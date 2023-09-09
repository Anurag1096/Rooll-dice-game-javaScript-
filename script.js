'use strict';
// Logic is nothing but understanding how the data flows thorough the system.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const di = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const hold = document.querySelector('.btn--hold');
score0.textContent = 0;
score1.textContent = 0;
di.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
setTimeout(()=>{
  console.log("this is timeout will run after micor task due to call back quee having low priority ");
},80)
queeMicorTask(()=>{
  console.log("this is micor task it will run before");
  
})
// Creating a random variable  and attaching it to the button click event.

const ranfunc = function () {
  if (playing) {
    const ranNum = Math.ceil(Math.random() * 6);
    document.querySelector('.dice').src = `dice-${ranNum}.png`;
    di.classList.remove('hidden');
    if (ranNum !== 1) {
      currentScore += ranNum;
      // score0.textContent = currentScore;

      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      console.log(currentScore);
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
};

hold.addEventListener('click', function () {
  if (playing) {
    console.log(currentScore);
    scores[`${activePlayer}`] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      di.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
    }
  }
});
document.querySelector('.btn--roll').addEventListener('click', ranfunc);

document.querySelector('.btn--new').addEventListener('click', function () {
  location.reload();
});
