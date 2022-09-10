'use strict';

//todo: Getting all the elements we need for selection for the project
//? Getting the correct modal
const modal = document.querySelector('.modal');
//? Getting the overlay class
const overlay = document.querySelector('.overlay');
//? Getting the close button
const btnCloseModal = document.querySelector('.close-modal');
//? This will only get the first instance of the class which is modal one
//? The querySelector will only select the first instance
// const btnsOpenModal = document.querySelector('.show-modal');
//? Will get all instances of the class
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closedModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(){
     // model.style.display = 'block';
    //? Adds fuzzy background to the page behind the model
    //? OverLay Removes 'hidden' from the class in the HTML
    //? Just add the string
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//? looping through the querySelector
for(let i = 0; i < btnsOpenModal.length; i++){
    //? Getting the text of each button
    // console.log(btnsOpenModal[i].textContent);
    //? Attaching event listener to all buttons
    btnsOpenModal[i].addEventListener('click', openModal);

    //? Not calling closeModal() because we dont want it to be called as soon as the line of code runs. We want it to run when the click event happens
    btnCloseModal.addEventListener('click', closedModal);
    overlay.addEventListener('click', closedModal);
}

//todo: Getting key press event which we are creating another addEventListener which will watch for events on the whole page
//? declaring an event listener here will tell the page to watch and check for events on the WHOLE page
//? Knowing which key is pressed is stored in the event 
document.addEventListener('keydown', function(event){
    //? From information of the event, key holds the value of which key was selected 
    // console.log(event.key);
    //? Checking to see if the modal is open
    //? Checking to make sure modal does NOT contain the hidden class
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closedModal();
    }
});

