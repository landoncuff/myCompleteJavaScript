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

////////////////////////////////////////////////////// Bankist Website ////////////////////////////////////////////

/*
TODO: Implementing Smooth Scrolling
 */
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// adding event
btnScrollTo.addEventListener('click', function (event){
  // getting element coordination's we want to scroll to
  const s1coords = section1.getBoundingClientRect();// Will return attributes of section
  const btncoords = event.target.getBoundingClientRect(); // getting btns attributes

  // getting the current scroll position
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('determining the viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling the page
  // We adding X & Y offset so it will always scroll from top of page rather than top of viewport
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);


  // making scrolling smooth
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // More modern way:
  section1.scrollIntoView({
    behavior: 'smooth'
  })
});

////////////////////////////////////////////////////// Lecture Notes //////////////////////////////////////////////

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

/*
TODO: Styles, Attributes, and Classes

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookies for improved functionality and analytics.<button ' +
  'class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
header.append(message);

///////////////////////////////////////////////// Styles ////////////////////////////////////////////////////////

// Adding a background color
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Read styles
const readStyles = getComputedStyle(message).height;
// Increasing current style by 40px
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// Creating CSS variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////////////// Attributes ////////////////////////////////////////////////////////

// getting the logo from the HTML page
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Will return absolute URL
console.log(logo.className);
console.log(logo.id);

// Non-standard:
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('designer', 'Landon Cuff');
logo.getAttribute('scr');

// Data attributes
console.log(logo.dataset.versionNumber)


///////////////////////////////////////////////// Classes ////////////////////////////////////////////////////////

logo.classList.add('c', 'j'); // adding class c and j
logo.classList.remove('c', 'j'); // removing class c and j
logo.classList.toggle('c'); // toggling class c
logo.classList.contains('c'); // checking for class c
logo.className = 'Landon' // DONT USE

 */










































