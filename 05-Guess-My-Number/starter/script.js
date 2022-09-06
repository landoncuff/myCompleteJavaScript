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
document.querySelector('.check').addEventListener('click', function () {
  //? Will caputer the input in the input field that the user enters
  // document.querySelector('.guess').value = e.target.value;
  //? JavaScript will call the function when the event happens
  //? When elements come from the DOM they are usually strings
  //? Number() will turn a string into number
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
