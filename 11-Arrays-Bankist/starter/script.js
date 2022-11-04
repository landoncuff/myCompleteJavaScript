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


/*
TODO: PROJECT -- Bank-ist App:
 */

/*
TODO: Creating DOM Elements:
 */

// Display the users movements on the front page list

const displayMovements = function (movements){
  // Removing existing code in HTML that we are replacing
  containerMovements.innerHTML = '';

  // Looping through account's 1 movements
  movements.forEach(function (val, index){
    // Determining if it is a deposit or withdraw
    const transaction = val > 0 ? 'deposit' : 'withdrawal';

    // creating HTML for each movement passed in
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${transaction}">${index + 1} ${transaction}</div>
          <div class="movements__value">${val}</div>
       </div>
    `;

    // Using a method to insert the new HTML into the document (teacher already added code below into a variable
    // document.querySelector('.movements').insertAdjacentHTML(html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

displayMovements(account1.movements);


/*
TODO: Computing Usernames
 */

// Function to Lowercase, then splitting word, mapping out first letter, joining results back together
// Will accept an array of accounts (objects)

const createUsernames = function (accounts){
  // adding username to account object
 accounts.forEach(val => val.username = val.owner.toLowerCase().split(' ').map(val => val[0]).join(''));
}

createUsernames(accounts);



/*
TODO: Adding all the totals together using Reduce
 */

const calcDisplayBalance = function (movements){
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${balance} EUR`;
}

calcDisplayBalance(account1.movements);

/*
TODO: Adding all values together
 */

const calcDisplaySummary = function (movements){
  const incomes = movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val, 0);
  // using Math To filter out negative sign
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // Calculating interest by creating new array 
  const intrest = movements
    .filter(val => val > 0)
    .map(deposit => deposit * 1.2/100)
    // Only putting interest on values greater or equal to 1
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}€`;
}

calcDisplaySummary(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

/*
TODO: forEach with Maps and Sets:

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach for Maps:
// first param val, second param key, third param map
currencies.forEach(function (val, key, map){
  console.log(`${key}: ${val}`);
});


// forEach for Sets:
const currenciesUnique = new Set([
  'USD', 'EUR', 'GBP', 'USD', 'EUR'
]);

currenciesUnique.forEach(function (val, val2, set){
  console.log(`${val} and ${val2}`);
});

// _ is used for throw away params
currenciesUnique.forEach(function (val, _, set){
  console.log(`${val} and ${val2}`);
});
 */

/*
TODO: Coding Challenge #1:

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each). For now, they are just interested in knowing whether
a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy
of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy
("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate){
  // first and LAST two dogs are cats (STEP 1)
  const juliasNewDogs = dogsJulia.slice(1, -2);

  // New Array with all dogs (STEP 2)
  const allDogs = juliasNewDogs.concat(dogsKate);
  const allDogsExample = [...juliasNewDogs, ...dogsKate];

  // Log either if the dog is an adult or puppy
  allDogs.forEach(function (val, index){
    if(val >= 3) {
      let output = `Dog number ${index + 1} is an adult, and is ${val} years old`;
      console.log(output);
    }else{
      let output = `Dog number ${index + 1} is still a puppy ${'🐶'}`;
      console.log(output);
    }
  });
}

const juliaDogsData1 = [3, 5, 2, 12, 7];
const kateDogsData1 = [4, 1, 15, 8, 3];

const juliaDogsData2 = [9, 16, 6, 8, 3];
const kateDogsData2 = [10, 5, 6, 1, 4];

checkDogs(juliaDogsData1, kateDogsData1);
checkDogs(juliaDogsData2, kateDogsData2);

 */

/*
TODO: The MAP method:


// Will loop through movements array to return a NEW array containing US dollars
const  eurT0Usd = 1.1;

const movementsUSD = movements.map(function (val){
  return val * eurT0Usd;
});

// Same code but using arrow function
const movementsUSDarrow = movements.map(val => val * eurT0Usd);


const movementsDescriptions = movements.map((val, index, array) => {
  const trans = val > 0 ? 'deposited': 'withdrew';

  return `You ${trans} $${Math.abs(val)} at index: ${index + 1}`;
});

console.log(movementsDescriptions);


// Same code as above when turning EUR into USD but using for loop
const movementsUSDfor = [];
for(const val of movements){
  movementsUSDfor.push(val * eurT0Usd);
}

 */

/*
TODO: The FILTER method:


// creating an array of all deposits (above 0)
const deposits = movements.filter(function (val, index, array){
  // Only elements that make this condition true will be put into the new array
  return val > 0;
});

const withdraw = movements.filter(val => val < 0);

 */

/*
TODO: The REDUCE method:

// Adding up all the numbers (first param is accumulator)
const totalNum = movements.reduce(function (accumulator, currentValue, iteration, array){
  // console.log(`Iteration ${iteration}: ${accumulator}`);
  // adding the current value to the iteration
 return accumulator + currentValue;
}, 0); // second param is the number we begin at

// acc keeps track of current sum
const totalNum2 = movements.reduce((acc, curr) => acc + curr, 0);

// Getting MAX value of the movements
const maxValue = movements.reduce((acc, mov) => {
  console.log(`Acc: ${acc}`);
  console.log(`Mov: ${mov}`);
  if(acc > mov){
    return acc;
  }else{
    return mov;
  }
}, movements[0]);

console.log(maxValue)

 */


/*
TODO: Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate
the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
  If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = function (ages){
  // creating a new array holding the human age of the dogs
  const humanAge = ages.map(val => val <=2 ? 2 * val : 16 + val *4);
  const adults = humanAge.filter(val => val >= 18);
  // const averageAge2 = adults.reduce((acc, val) =>  acc + val, 0) / adults.length;
  const averageAge = adults.reduce((acc, val, i, array) =>  acc + val / array.length, 0);

  return averageAge;
}

// test data 1
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// test data 2
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 */

/*
TODO: Chaining Methods:

// Adding all the deposits together
const converted = movements
  .filter(val => val > 0)
  .map(val => val * 1.1)
  .reduce((acc, val) => acc + val, 0);

console.log(converted);

 */

/*
TODO: Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge2 = age => age
  .map(val => val <= 2 ? 2 * val : 16 + val * 4)
  .filter(val => val >= 18)
  .reduce((acc, val, i, arr) => acc + val / arr.length, 0);

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

 */

/*
TODO: The FIND method:

const firstWithdraw = movements.find(function (mov){
  return mov < 0; // returns -400
});

console.log(firstWithdraw);
console.log(movements);

// Using the find method to find an object in the array

const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // Returns their object

// Same code above but using for loop
const foundObject = [];
for(const acc of accounts){
  if(acc.owner === 'Jessica Davis'){
    foundObject.push(acc);
  }else{
    continue;
  }
}

console.log(foundObject);

 */
































