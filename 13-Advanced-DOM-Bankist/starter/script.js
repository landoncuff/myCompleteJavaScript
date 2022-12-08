'use strict';

///////////////////////////////////////
// Modal window

////////////////////////////////////////////////////// Bankist Website ////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLinks = document.querySelectorAll('.nav__link');
const navBar = document.querySelector('.nav__links');


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
TODO: Implementing Smooth Scrolling
 */
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

/*
TODO: Event Delegation: Implementing Page Navigation
 */
// Event Delegation Navigation:
// Adding event to parent
navBar.addEventListener('click', function (e){
  e.preventDefault();
  // where the event happened
  console.log(e.target)
  // matching to make sure its the ones we want
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
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

/*
TODO: Types of Events and Event Handlers

////////////////////////////////////////////////////// Mouse Enter Event ///////////////////////////////////////////
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e){
  alert('addEvent Listener: Great! You are reading the heading')
});

h1.onmouseenter = function (e){
  alert('addEvent Listener: Great! You are reading the heading')
};

// Remove event handler
const alertH1 = function (e){
  alert('addEvent Listener: Great! You are reading the heading');

  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// Removing event after a certain amount of time has passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 */

/*
TODO: Event Propagation in Practice

/////////////////////////////////////////// Bubbling ////////////////////////////////////////////////////////////

// Creating the random color
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// Adding event handler to the whole nav & each link
document.querySelector('.nav__link').addEventListener('click', function (e){
  // Points to the event handler that is attached (the link)
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target);
  console.log('Link', e.currentTarget);

  // Stop Propagation from happening (the parents getting clicked)
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e){
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target);
  console.log('Container', e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e){
});

 */

/*
TODO: DOM Traversing:

const h1 = document.querySelector('h1');

// Walking through the DOM downwards (getting all child elements):
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // LIVE connection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
console.log(h1.firstChild);

// Walking through DOM upwards (getting all parent elements):
console.log(h1.parentNode);
console.log(h1.parentElement);

// Not a direct parent but closest to our element
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


// Walking sideways (getting siblings)
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.nextElementSibling)
console.log(h1.previousElementSibling)
// getting all siblings
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
  // setting all siblings to 50% except for the header
  if(el !== h1) el.style.transform = 'scale(0.5)';
});

 */



































