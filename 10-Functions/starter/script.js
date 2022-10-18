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
        // alert('Checked In!');
    }else{
        // alert('Wrong Passport');
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