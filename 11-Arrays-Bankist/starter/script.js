'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
TODO: Simple Array Methods:


let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method:
arr.slice(2) // Return ['c', 'd', 'e']
arr.slice(2, 4) // Return ['c', 'd'] doesnt include end
arr.slice(-2) // Return ['d', 'e'] gets the end of the array
arr.slice(1, -2) // Return ['b', 'c'] starts at b and removes the last two elements
let newArr1 = arr.slice() // Will return the actual arr
let newArr = [...arr]; // Same code as above. Return the whole array into a new variable


// Splice Method:
arr.splice(2); // Will remove ['c', 'd', 'e'] from array
arr.splice(-1); // Removing the last element from the array
arr.splice(1, 2) // Will return ['a', 'd']


const arr2 = ['a', 'b', 'c', 'd', 'e'];

// Reverse Method:
console.log(arr2.reverse());


// Concat Method:
const letters = arr.concat(arr2);
const letters1 = [...arr, ...arr2]; // Same code as above
console.log(letters)


// Join Method:
const newString = letters.join('-'); // Returns a-e-d-c-b-a
console.log(newString);

*/


/*
TODO: AT method:


const arr = [23, 11, 64];

// pulling the first item from the array:
let firstItem = arr[0];

// using AT method
let firstItemAT = arr.at(0);

console.log(firstItem);
console.log(firstItemAT);

// getting the last element from the array (dont know the length of the array)
let lastEl = arr[arr.length - 1];

// using AT method to get last value
let lastElAT = arr.at(-1);

console.log(lastEl);
console.log(lastElAT);
 */


/*
TODO: Looping Arrays: forEach


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a forOf loop
for(const movement of movements){
  if(movement > 0){
    console.log(`You deposited $${movement}`);
  }else{
    // using Math method to get absolute value of movement (remove - )
    console.log(`You withdrew $${Math.abs(movement)}`);
  }
}

console.log("------- FOREACH ------");

movements.forEach(function(movement){
  if(movement > 0){
    console.log(`You deposited $${movement}`);
  }else{
    // using Math method to get absolute value of movement (remove - )
    console.log(`You withdrew $${Math.abs(movement)}`);
  }
});

console.log("---- Array Values ----")

// Separating values into array

// forOf
for(const [i, values] of movements.entries()){
  if(values > 0){
    console.log(`You deposited $${values} at index: ${i}`);
  }else{
    console.log(`You withdrew $${Math.abs(values)} at index: ${i}`);
  }
}

// forEach
movements.forEach(function(mov, i, arr){
  console.log(mov);
  console.log(i);
  console.log(arr);
  if(mov > 0){
    console.log(`You deposited $${mov} at index: ${i}`);
  }else{
    console.log(`You withdrew $${Math.abs(mov)} at index: ${i}`);
  }
});
 */



