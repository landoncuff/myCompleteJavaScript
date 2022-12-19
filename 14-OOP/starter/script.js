'use strict';
/*
TODO: Constructor Functions: "new" Operator

const Person = function (firstName, birthYear){
  // Adding values to the newly created object (instance properties)
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// calling the Constructor Function (only difference between normal function and constructor)
// Creating a new instance of each constructor function
const landon = new Person('Landon', 1996);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1990);

console.log(landon);
console.log(matilda);
console.log(jack);
// Checking to see if the variable is a contractor
console.log(landon instanceof Person); // returns true or false
 */

/*
TODO: Prototypes:

const Person = function (firstName, birthYear){
  // Adding values to the newly created object (instance properties)
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// Creating a new instance of each constructor function
const landon = new Person('Landon', 1996);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1990);

console.log(landon);

// Prototypes:

// Adding a method to the prototype property (add to the constructor function)
Person.prototype.calcAge = function (){
  console.log(2037 - this.birthYear);
}

// Calling the new method inside the constructor function
landon.calcAge(); // Have access because of prototype inheritance

console.log(landon.__proto__ === Person.prototype); // true
// Is true because prototype is not a prototype of Person rather than all object created from Person
console.log(Person.prototype.isPrototypeOf(landon)); // true


// Set properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(landon.species);

// Checking to see if object has the properity or if its in the prototype

// Returns true because it lives inside the object
console.log(landon.hasOwnProperty('firstName')); // true
// False because it lives inside the prototype
console.log(landon.hasOwnProperty('species')); // false

 */































