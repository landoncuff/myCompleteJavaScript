'use strict';

/*
TODO: Default Parameters

const bookings = [];
? Creating an airline booking function
    ? Using short-circuiting because by default empty parameters are undefined
const createBooking = function(flightNum, numPassengers = 1, price = 199){
    ! ES5 Way to set default parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    ? Creating an object to hold values passed into the function
    ! we dont need to write it flightNum: flightNum in ES6
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    ? pushing values to an array
    bookings.push(booking);
}

createBooking('LH123');
? Wanting to numPassengers to use its default but passing in values for all other parameters
createBooking('LH123', undefined, 1000);

*/

/*
TODO: How Passing Arguments Works: Value vs. Reference

const flight = 'LH123';
const landon = {
    name: 'Landon Cuff',
    passport: 346453637,
}

? Checkin function (Need flight number and passenger object)
const checkIn = function(flightNum, passenger){
    ? Flight has changed
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 346453637){
        alert('Checked In!');
    }else{
        alert('Wrong Passport');
    }
}


? Passing in the flight number and the passenger object
checkIn(flight, landon);
! Completly different variable that we changed in the function because it is a copy
console.log(flight);
! Changed because we changed the actual object inside the function
console.log(landon);


* Another function example:

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(landon);
? Will throw the wrong passport alert because we changed in in the function above even though it was a copy
checkIn(flight, landon);

console.log(landon);
*/


/*
TODO: First-Class and Higher-Order Functions
*/

/*
TODO: Functions Accepting Callback Functions

? Function to replace ALL the spaces in a word and putting it to lowerCase
const oneWord = function(str){
    return str.replaceAll(" ", "").toLowerCase();
}

console.log(oneWord('Landon Cuff'));

const upperFirstWord = function(str){
    ? Using destructuring and pulling out the first word of the string and then adding the rest of the string to "Other" Variable
    const [first, ...other] = str.split(' ');

    ? adding the first word back with all the other words
    return [first.toUpperCase(), ...other].join(' ');
}

? New function that will take in a string and a function
* Higher-Order function (Takes in another function)
const transformer = function(str, fn){
    ? Declaring the function by passing in the str
    console.log(`Transformed string: ${fn(str)}`);

    ? Functions can have methods and properties
    console.log(`Transformed string: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);


? Differnt kind of Callback function
['Landon', 'Dallin', 'Kilee'].forEach(upperFirstWord);
*/


/*
TODO: Functions Returning Functions


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

* Challenge: Rewrite function above using arrow functions:
const greetArr = (greeting) => { return (name) => console.log(`${greeting} ${name}`)};
! Teachers way
const greetArr2 = greeting => name => console.log(`${greeting} ${name}`);

? greeterHey is now a function (it is the function above return statement)
const greeterHey = greet('Hey');

greeterHey('Landon'); //? Will return "Hey Landon"
greeterHey('Dallin'); //? Will return "Hey Dallin"

! You can also call the return statements function by doing:
greet('Hello')('Landon'); //? Will return "Hello Landon"

? Calling the arrow function
greetArr('Hello')('Landon'); //? Will return "Hello Landon"
*/


/*
TODO: Functions Call & Apply Method


? New Object
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        ? using "this" keyword to get the airline and itata code
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

         ? Want to add each value to the bookings array to capture flights
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
}

lufthansa.book('239', 'Landon'); //? Returns Landon booked a seat on Lufthansa flight LH239`
lufthansa.book('239', 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

! Creating a new function to hold the function inside lufthansa so we dont repeat code
const book = lufthansa.book;

! Does NOT work because "this" keyword is not defined in the function above... It's only in the method
// book('23', 'Landon');

? Using "call" method on the function to have the "this" keyword point to the correct object
book.call(eurowings, 23, "Robert Cuff");
console.log(eurowings);

? Now using "call" method to call lufthansa as object
book.call(lufthansa, 23, "Robert Cuff");
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 23, "Robert Cuff");

const flightData = [583, 'Landon Cuff'];
book.apply(swiss, flightData);
*/

/*
TODO: Function Bind Method


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
}

lufthansa.book('239', 'Landon'); //? Returns Landon booked a seat on Lufthansa flight LH239`
lufthansa.book('239', 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

const book = lufthansa.book;


* Using the bind method:
? Wont call the function book rather it will create a new function that will always use the eurowings object for "this" keyword
const bookEW = book.bind(eurowings);
? Creating a booking function for every airline
const bookLH = book.bind(swiss);
bookEW(23, "Kass Dibb");

? we can set a default variable for a specific booking to set in stone the value
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Landon');


* Bind method with eventListers
lufthansa.planes = 300;
? New method
lufthansa.buyPlane = function(){
    ? "this" is the button element not an actual value because the eventlistener is calling the function
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

? We dont want to call the function in an event listener rather declare it so we use the bind method instead of the call method
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


* Partial Application: (preset parameters)
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

? Presetting the rate so it will always be the same
! Declaring "null" because the first param is for "this" keyword and if there doesnt need to be, then you set it as null
const addVAT = addTax.bind(null, 0.23);
? Same as the code above
// addTax = value => value + value * 0.23;



* Challenge: Creating same logic above but function returing function
const mainFun = function(rate){
    return function(value){
        return value + value * rate;
    }
}

? The rate will always be the same when creating a main function
const secondFun = mainFun(.1);
? You can change the value param to whatever you need
console.log(secondFun(200));
*/

/*
TODO: Challenge #1:

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

* 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  * 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  * 1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
* 2. Call this method whenever the user clicks the "Answer poll" button.
* 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
* 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

! HINT: Use many of the tools you learned about in this and the last section 😉

? BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

? BONUS TEST DATA 1: [5, 2, 3]
? BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
    question: "What is your favorite programming language?",
    options: ['0: JavaScript', '1: Pyton', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    ? Creating method:
    registerNewAnswer(){
        ! Creating a string dynamically to ask the question and give the options
        ! We are joining all the options into one that is separated by a new line
        const answer = Number(
            prompt(
            `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            ))
        console.log(answer);

        ! Resetering the input to make sure it is not something crazy (like 52)
        typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    ? Another method to make sure the user did not enter a string that they entered a number
    ! Setting the default value to array
    displayResults(type = 'array') {
        if (type === 'array') {
          console.log(this.answers);
        } else if (type === 'string') {
          // Poll results are 13, 2, 4, 1
          console.log(`Poll results are ${this.answers.join(', ')}`);
        }
      },
}

document
  .querySelector('.poll')
  ! Have to add the bind method because "this" keyword will only point to the querySelector so we add poll to the bind method to make sure it reads the correct values
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


  ! Code for the bonus:
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

*/

/*
TODO: Immediately Invoked Function Expressions (IIFE)


? Sometimes in JavaScript you need a funciton that is called once and never again
const runOnce = function(){
    console.log('This will never be ran again');
}

runOnce();

? Creating a funciton that is called immediately and not is not saved
* The code beflow is IIFE expression.
! adding the () around the function allows us to create a function without need to declare a function name
(function(){
    console.log('This will never be ran again');
})(); //! The (); at the end will call the function immediately
! (function(){})();

* Same code as above but using arrow function
(() => console.log('This also wont be called again'))();
*/


/*
TODO: Closures



const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(passengerCount);
    }
}
//! One way to call the function
secureBooking()();

//! Creating a new function that will return the inner function
const booker = secureBooking();
booker(); //? Becomes the inner function
booker();
booker();
booker();

//? How does the passengerCount keep incrementing... when the secureBooking has already been called and created

console.dir(booker);
 */

/*TODO: Challenge #2

This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed,
and what that means for the variables involved in this example.

GOOD LUCK 😀


// This is a function that is ran impartially when the page is processed.
// The event listener to change the color is a closure and will remember the variable "header"
(function () {
    // Getting the h1 header and setting the color to red
    const header = document.querySelector('h1'); header.style.color = 'red';
    // getting the body of the page and adding an event listener to that body
    document.querySelector('body').addEventListener('click', function (){
        // Changing the color of the text to blue when the user clicks on the body of the page
        header.style.color = 'blue';
    })
})();
 */







