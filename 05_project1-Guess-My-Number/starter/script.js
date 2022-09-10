'use strict';

//todo: get values and change values of text fields and input fields from the DOM
/*
? Selecting the class from the HTML p tag for "start guessing"
? Using the .textContent will get the actual content of the HTML p tag by calling its class
console.log(document.querySelector('.message').textContent);

? Setting and manipulating the element for "Start guessing"
document.querySelector('.message').textContent = 'Landon is Awesome';

? Changing two other HTML elements
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

? Getting the input value from the DOM
console.log(document.querySelector('.guess').value);

? Chaning the value of an input element
document.querySelector('.guess').value = 23;

*/

//Todo: Click Event
//? Handling the click event
//! Need to use a event listener

//? Adding click listener to the click button
//? The function is the event handler (Handles the events)
// document.querySelector('.check').addEventListener('click', function () {
//   //? Will caputer the input in the input field that the user enters
//   // document.querySelector('.guess').value = e.target.value;
//   //? JavaScript will call the function when the event happens
//   //? When elements come from the DOM they are usually strings
//   //? Number() will turn a string into number
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//   }
// });



//Todo: Game Logic:
//? Getting one number to compare to each click from the user
//? getting a number between 0 and 20 (will be 0 - 19 but +1 will add 20) 
//? also removing desimals
const secretNumber = Math.trunc(Math.random()*20)+1;

//? Setting a new variable to keep track of the users score
//? Using a let because we will be changing the value
let score = 20;
let highscore = 0;

//? displaying the random number
// document.querySelector('.number').textContent = secretNumber;

const setScore = function (text, score) {
  if(score > 1){
    document.querySelector('.message').textContent = text;
    //? Decreasing the score
    score--;
    document.querySelector('.score').textContent = score;
  }else{
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
  }
  return score;
}

const myQuerySelector = function (className, text){
  document.querySelector(className).textContent = text;
}


document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if(!guess) {
    myQuerySelector('.message', 'No Number!!');
  }else if(guess === secretNumber){
    myQuerySelector('.message','Correct Number');
    myQuerySelector('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //? Setting the highscore to the final score
    if(score > highscore){
      highscore = score;
      myQuerySelector('.highscore', highscore);
    }
  }else if(guess > secretNumber){
    score = setScore('Too High', score);
  }else if(guess < secretNumber){
    score = setScore('Too Low', score);
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  const secretNumber = Math.trunc(Math.random()*20)+1;

  myQuerySelector('.message',  "Start Guessing...");
  myQuerySelector('.score', score);
  myQuerySelector('.number', '?');
  //? input field and it is always a string
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
