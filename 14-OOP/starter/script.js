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

/*
TODO: Prototype Inheritance on Built-In Objects:

const Person = function (firstName, birthYear){
  // Adding values to the newly created object (instance properties)
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// Creating a new instance of each constructor function
const landon = new Person('Landon', 1996);

Person.prototype.calcAge = function (){
  console.log(2037 - this.birthYear);
}

// Calling the new method inside the constructor function
landon.calcAge();

console.log(landon.__proto__);
// Object.prototype (top of prototype chain)
console.log(landon.__proto__.__proto__);
// null because we have already reached the top
console.log(landon.__proto__.__proto__.__proto__);

// getting the function itself
console.dir(Person.prototype.constructor);


// Prototype of Arrays:

const arr = [1,2,3,4, 4, 3, 2, 5, 7, 8, 9, 8];
// Same code as above: new Array = [];
console.log(arr.__proto__ === Array.prototype);

// Creating a new prototype for all of my arrays in my program
Array.prototype.unique = function (){
  return [...new Set(this)]; // will return an array with no duplicates
}

console.log(arr.unique());

const h1 = document.querySelector('h1');

 */

/*
TODO: Coding Challenge #1
1. Use a constructor function to implement a Car. A car has a make and a speed property.
   The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
 */

// Step #1 -- Constructor function
const Car = function (make, speed){
  this.make = make;
  this.speed = speed;
}
const honda = new Car('Honda', 60);

// Step #2 -- New Method to add 10 to speed
Car.prototype.accelerate = function (){
  this.speed = this.speed + 10;
}
honda.accelerate();

// Step #3 -- New Method to decrease speed
Car.prototype.brake = function (){
  this.speed = this.speed - 5;
}
honda.brake();

// Step #4 -- Call the two new methods on different objects
const toyoda = new Car('Toyoda', 40);
const ford = new Car('Ford', 30);

toyoda.accelerate();
ford.brake();
console.log(ford, toyoda);




















