'use strict';

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

//todo: Put scores to 0
//* Getting the score elements
//? Both options will get the ID from the HTML
//? getElementById will be faster

score0El.textContent = 0;
score1El.textContent = 0;

//todo: hide the dice element
//? Adding the hidden class to the dice
diceEl.classList.add('hidden');

//todo: Diplay image when player rolls the dice
//? Holding all players scores
//? Player 1 will be index 0 and player 2 will be index 1
const scores = [0,0];
//? holding scores in a variable instead of the DOM
let currentScore = 0;
//? Finding out which player is active (will be 0 for player 1 and 1 for player 2)
let activePlayer = 0;
//? creating an event handler when user clicks button

buttonRoll.addEventListener('click', function(){
    //todo: 1. Generating the dice roll
    //? trunc removes decmials and will get random number between 1 and 6 (+1 includes 6)
    const dice = Math.trunc(Math.random() * 6) + 1;


    //todo: 2. Display dice
    diceEl.classList.remove('hidden');
    //? Changing the src of the image and dynamically loading the correct image using the random number genorator
    diceEl.src = `dice-${dice}.png`;

    //todo: 3. Check for rolled 1: if true, switch player
    if(dice !== 1){
        //todo: add current dice to current score
        currentScore += dice;
        // current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }else{
        //Todo: Move to 0 and switch player
        //? checking to see which player is active
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        //? will add or remove depending on if the class is there or not
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
        // current0El.textContent = 0;
        // current1El.textContent = 0;
    }
});




// score0El.textContent = 0;
// score1El.textContent = 0;

// diceEl.classList.add('hidden');

// let currentScore = 0;

// buttonRoll.addEventListener('click', function(){
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if(dice !== 1){
//         currentScore += dice;

//         current0El.textContent = currentScore;
        
//     }else{
//         current0El.textContent = 0;
//         score1El.textContent = 0;
//     }
// });