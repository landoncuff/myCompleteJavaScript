'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Changed code to use a forEach rather than writing out a for loop
btnsOpenModal.forEach(val => val.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
TODO: Selecting, Creating, and Deleting Elements

////////////////////////////////////////// SELECTING ELEMENTS: ///////////////////////////////////////////////////

console.log(document.documentElement); // Whole HTML page
console.log(document.head); // Head of HTML page
console.log(document.body); // Body of HTML page

// Gets first instance of Header class
document.querySelector('.header');
// Gets ALL instances of Section class
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');

// Returns HTML collection (LIVE collection) -- Updates when DOM updates
const allButtons = document.getElementsByTagName('button');

const allClasses = document.getElementsByClassName('btn');


//////////////////////////////////////// Creating & Inserting Elements: ////////////////////////////////////////////

// Creating:
const message = document.createElement('div');
// because message is a DOM object, we can use methods (adding a class)
message.classList.add('cookie-message');
// Adding text to the div
message.textContent = 'We use cookies for improved functionality and analytics.'
// adding HTML to the div
message.innerHTML = 'We use cookies for improved functionality and analytics.<button ' +
  'class="btn btn--close-cookie">Got it!</button>';


const header = document.querySelector('.header');
// Adding the object to the HTML page as the FIRST child of the header element
header.prepend(message);
// Adding the object as the LAST child of the header element
header.append(message);
// Allows you to display both elements at once
header.append(message.cloneNode(true));
// Displays the message before header element
header.before(message);
// Displays the message after header element
header.after(message);

/////////////////////////////////////// DELETE ELEMENTS: /////////////////////////////////////////////////////////

document.querySelector('.btn--close-cookie').addEventListener('click', function (){
  message.remove();
})

 */






















































