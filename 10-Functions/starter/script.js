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
TODO: Functions Returning Functions


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
*/

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


//* Using the bind method:
//? Wont call the function book rather it will create a new function that will always use the eurowings object for "this" keyword
const bookEW = book.bind(eurowings);
//? Creating a booking function for every airline
const bookLH = book.bind(swiss);
bookEW(23, "Kass Dibb");

//? we can set a default variable for a specific booking to set in stone the value
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Landon');


//* Bind method with eventListers
lufthansa.planes = 300;
//? New method
lufthansa.buyPlane = function(){
    //? "this" is the button element not an actual value because the eventlistener is calling the function
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

//? We dont want to call the function in an event listener rather declare it so we use the bind method instead of the call method
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//* Partial Application: (preset parameters)
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

//? Presetting the rate so it will always be the same
//! Declaring "null" because the first param is for "this" keyword and if there doesnt need to be, then you set it as null
const addVAT = addTax.bind(null, 0.23);
//? Same as the code above
// addTax = value => value + value * 0.23;


