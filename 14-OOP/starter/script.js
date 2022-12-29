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

// Step #1 -- Constructor function
const Car = function (make, speed){
  this.make = make;
  this.speed = speed;
}
const honda = new Car('Honda', 60);

// Step #2 -- New Method to add 10 to speed
Car.prototype.accelerate = function (){
  this.speed += 10;
}
honda.accelerate();

// Step #3 -- New Method to decrease speed
Car.prototype.brake = function (){
  this.speed -= 5;
}
honda.brake();

// Step #4 -- Call the two new methods on different objects
const toyoda = new Car('Toyoda', 40);
const ford = new Car('Ford', 30);

toyoda.accelerate();
ford.brake();
ford.accelerate();
ford.accelerate();
ford.brake();

console.log(ford, toyoda);

 */

/*
TODO: ES6 Classes

// Class Expression
// const PersonClass = class{}

// Class Declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Everything written outside of the constructor will be in the prototype
  // Creating methods
  calcAge(){
    console.log(2037 - this.birthYear);
  }
}

const landon = new PersonClass('Robert', 1996);
landon.calcAge();

// We can still add to the prototype:
PersonClass.prototype.greet = function (){
  console.log(`Hello ${this.firstName}`);
}
landon.greet();

 */

/*
TODO: Setters & Getters

const account = {
  owner: 'Landon',
  movements: [1, 300, 250, 5],
  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
    this.movements.push(mov);
  }
};
console.log(account.latest)

account.latest = 10;

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  // Doing some data validation
  set fullName(name){
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName(){
    return this._fullName;
  }
}

const landon = new PersonClass('Robert Cuff', 1996);
const kassidy = new PersonClass('Kassidy Cuff', 1999);

console.log(landon.fullName);
console.log(kassidy.fullName);

 */

/*
TODO: Static Methods

// Constructor Function:
const Person = function (firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// ES6 Class:
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods
  calcAge(){
    console.log(2037 - this.birthYear);
  }

  // static method
  static hey(){
    console.log('hello Friend');
    console.log(this);
  }
}

const landon = new Person('Landon', 1996);
const kassidy = new PersonClass('Kassidy', 1999);

// Adding a static method
Person.hey = function () {
  console.log(`hey there`);
  console.log(this); // returns function
}
Person.hey();
landon.hey(); // Throws error. Only exists on the actual constructor

// Class
PersonClass.hey();
kassidy.hey();

 */

/*
TODO: Object.create

// Object we want to be the prototype of all other objects
const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.birthYear = birthYear;
    this.firstName = firstName;
  }
};

// creating a person object that will use object proto

// Created an empty object that has the prototype of the object above
const landon = Object.create(PersonProto);
landon.firstName = 'Landon';
landon.birthYear = 1996;
console.log(landon);
landon.calcAge();
console.log(landon.__proto__ === PersonProto); // Returns true

const kassidy = Object.create(PersonProto);
kassidy.init("Kassidy", 1999);
kassidy.calcAge();

 */

/*
TODO: Coding Challenge #2

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h
   (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

// Step 1: ES6 Class
class Car{
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(this.speed)
  }

  break(){
    this.speed -= 5;
    console.log(this.speed)
  }

  // Step 2: Create a getter
  get speedUS(){
    return this.speed / 1.6;
  }

  // Step 3: Create a setter
  set speedUS(speed){
    this.speed = speed * 1.6;
    console.log(this.speed)
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.break();
console.log(ford.speedUS); // Calling Getter
ford.speedUS = 50; // Calling Setter

 */




