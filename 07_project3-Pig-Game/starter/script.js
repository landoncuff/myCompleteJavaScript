'use strict';
//? Both options will get the ID from the HTML
//? getElementById will be faster
//* Getting the score elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

init();

buttonRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      diceEl.classList.add('hidden');
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', init);

/*
    const switchPlayer = function () {
        ? checking to see which player is active
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        ? will add or remove depending on if the class is there or not
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
    };

    ? Initialization
    let scores, currentScore, activePlayer, playing;

    const init = function () {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;

        todo: Put scores to 0
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;

        ? Adding the hidden class to the dice to hide it
        diceEl.classList.add('hidden');
        player1.classList.remove('player--winner');
        player2.classList.remove('player--winner');
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
    };

    ? Excuting the code when the page loads
    init();

    ? creating an event handler when user clicks button
    buttonRoll.addEventListener('click', function () {
        if (playing) {
            todo: 1. Generating the dice roll
            ? trunc removes decmials and will get random number between 1 and 6 (+1 includes 6)
            const dice = Math.trunc(Math.random() * 6) + 1;

            todo: 2. Display dice
            diceEl.classList.remove('hidden');
            ? Changing the src of the image and dynamically loading the correct image using the random number genorator
            diceEl.src = `dice-${dice}.png`;

            todo: 3. Check for rolled 1: if true, switch player
            if (dice !== 1) {
                todo: add current dice to current score
                currentScore += dice;
                // current0El.textContent = currentScore;
                document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
            } else {
                Todo: Move to 0 and switch player
                switchPlayer();
            }
        }
    });

    buttonHold.addEventListener('click', function () {
        todo: Add current score to the active players
        ? Adding the score into the array
        if (playing) {
            scores[activePlayer] += currentScore;

            document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

            todo: Check if score is 100
            if (scores[activePlayer] >= 20) {
                ? Hidding the dice
                diceEl.classList.add('hidden');
                playing = false;
                todo: Finish the game if 100
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.add('player--winner');
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.remove('player--active');
            } else {
                todo: if not, move to next player
                switchPlayer();
            }
        }
    });

    todo: resetting the game state
    buttonNew.addEventListener('click', init);
*/
