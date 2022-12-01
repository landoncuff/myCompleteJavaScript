'use strict';

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2022-11-29T14:11:59.604Z',
    '2022-11-26T17:01:17.194Z',
    '2022-11-27T23:36:17.929Z',
    '2022-11-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovement = function (date, locale){
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;


  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // // if none of the requirements are met
  // return `${month}/${day}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
}

const formatCur = function (value, locale, cur){
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency: cur
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Get date
    const date = new Date(acc.movementsDates[i]); // current index of the movements
    const displayDate = formatMovement(date, acc.locale);

    // get International Number format
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // Fake always logged in:
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = '100';


/*
TODO: Implementing A Countdown Timer
 */
const startLogOutTimer = function (){

  const tick = function (){
    // Minutes and seconds
    // Using Trunc to add no decimal places
    const min = Math.trunc(time / 60).toString().padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0'); // remainder of 60

    // Each callback, print remaining time to the user interface
    labelTimer.textContent = `${min}:${seconds}`;

    // When time is 0, stop timer and log out user
    if(time === 0){
      // Killing the timer
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';
    }

    // Decrease Time every second
    time--;
  }

  // Set time to 5 minutes
  let time = 180;

  // Calling function right away so it starts at the right moment rather than 1
  tick();
  const timer = setInterval(tick, 1000); // Calling function every second

  return timer;
}

// Login
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';

    // create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Checking for timer and starting logout timer:
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Adding transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Resetting timer:
    clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan Function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function (){
      // Add movement
      currentAccount.movements.push(amount);
      // Add movement date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Resetting timer:
      clearInterval(timer);
      timer = startLogOutTimer();

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/*
TODO: Adding Dates

const now = new Date(); // current date

// want to display as day/month/year
// adding 0 in front of day or month if single digit
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

const fullDate = `${month}/${day}/${year}, ${hour}:${min}`;
labelDate.textContent = fullDate;
 */


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/* TODO: Converting and Checking Numbers

// All numbers in JavaScript are looked at as decimals even if you write an int
console.log(23 === 23.0); // will return true

// Convert string to number
console.log(Number('23'));
console.log(+'23'); // will convert because the plus tell JavaScript to do type conversion

// Parsing a number from a string
// Has to start with a number
console.log(Number.parseInt('30pxLandon', 10)) // Returns 30

console.log(Number.parseFloat('2.5rem'))


// Checking to see if not a number NaN
console.log(Number.isNaN(20)); // Returns false
console.log(Number.isNaN(+'20X')); // Returns true

console.log(Number.isFinite(+'20X')); // Returns false
console.log(Number.isFinite(20)); // Returns true
 */

/*
TODO: Math & Rounding


// Square Root
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
// Cubic Root
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 20, 4));
console.log(Math.min(5, 18, 20, 4));


// Calculate pixels of a circle with radios of 10 pixels
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Generate Random Numbers:
console.log(Math.trunc(Math.random() * 6) + 1);
// Getting random between two numbers
const randomINT = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomINT(1, 5));

// Rounding Numbers:
console.log(Math.trunc(23.3)); // Removes Decimals

console.log(Math.round(23.5)); // Rounds to nearest hole
console.log(Math.ceil(23.3)); // Always will round up
console.log(Math.floor(23.3)); // Always will round down

// Rounding Decimals:
console.log((2.7).toFixed(0))

 */

/*
TODO: The Remainder Operator:

console.log(5 % 2); // returns 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // returns 2
console.log(8 / 3); // 8 = 2 * 3 + 2

// Find even or odd:

const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(4));

// Changing every other row red and the other row blue
labelBalance.addEventListener('click', function (){
  // Spreading all the elements from the DOM into a new array
  [...document.querySelectorAll('.movements__row')].forEach((val, i) => {
    if(i % 2 === 0){
      val.style.backgroundColor = 'orangered';
    }
    if(i % 3 === 0){
      val.style.backgroundColor = 'blue';
    }

  });
});
 */

/*
TODO: Numeric Separators:

// Get diameter of solar system
// JavaScript will not read the _ scores when we write them
const diameter = 287_460_000_000; // too hard to read

// English we write (287,460,000,000) we can do that in code


const price = 345_99; // Returns 34599
 */

/*
TODO: Working with BigINT:

// There is a limit to how big numbers can be
// Test how many numbers we can use
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// If we need a bigger number than the safe integer

// BigINT is used to store numbers no matter how big
console.log(BigInt(744646728748274827429748289427));
console.log(744646728748274827429748289427n);

// Operations for BigINT
console.log(10000n + 10000n); // returns 20,000

// Mix BigINTs with regular numbers
const huge = 744646728748274827429748289427n;
const num = 23;
// console.log(huge * num);// throws error
console.log(huge * BigInt(num));// works

 */

/*
TODO: Creating Dates

// Create a date (4 ways)

const now = new Date();
console.log(now)

const parseFromString = new Date('Nov 28 2022 08:09:08');
const parseOwnFromString = new Date('December 28 2022 08:09:08');
console.log(parseFromString);
console.log(parseOwnFromString);

// new date object to hold the account movement dates
const accountDates = new Date(account1.movementsDates[0]);
console.log(accountDates);

// year, month (0 based -- 10 = Nov), day, hour, minute, second
console.log(new Date(2037, 10, 19, 15, 23, 5));

// Days as milliseconds
console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Different Date Methods:
const future = new Date(2037, 10, 19, 15, 23);

const getFullYear = future.getFullYear();
const getMonth = future.getMonth() + 1; // 0 based so need to add 1
const getDay = future.getDay(); // Day of the week
const getHour = future.getHours();
const getMin = future.getMinutes();
const getSec = future.getSeconds();
const toString = future.toISOString();
const getTime = future.getTime();
//getting current timestamp
const currentTime = Date.now();

future.setFullYear(2040);
console.log(future);
 */

/*
TODO: Operations with Dates

const future = new Date(2037, 10, 19);

// Turning the date into a number
console.log(Number(future));
// Same Code
console.log(+future);


// Function that takes two dates and returns the number between the two days
// Converting from millisecond to number
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// returns milliseconds
const days1 = calcDaysPassed(future, new Date(2037, 10, 26));

console.log(days1);
 */

/*
TODO: Internationalizing Dates (INTL)

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
}

const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

 */

/*
TODO: Internationalizing Numbers (INTL)

const num = 33898494;
const object = {
  style: "currency",
  // style: "percent",
  // style: "unit",
  unit: 'celsius',
  // unit: 'mile-per-hour'
  currency: 'EUR',
  // useGrouping: false
}

console.log('US:', new Intl.NumberFormat('en-US', object).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY').format(num));
console.log('Browser:', new Intl.NumberFormat(navigator.language).format(num));

 */

/*
TODO: Timers: setTimeout() and setInterval()


// Set timmer for ordering a pizza
setTimeout(() => console.log('Here is pizza'), 3000)
console.log('Waiting....');
setTimeout(
  (ing1, ing2) => console.log(`Here is more pizza with ${ing1} and ${ing2}`),
  3000,
  'Peperoni', 'Cheese'
);

// Cancel timeout
const ingredients = ['Olives', 'Spinach'];
const thirdPizza = setTimeout(
  (ing1, ing2) => console.log(`Third pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

if(ingredients.includes('Spinach')) clearTimeout(thirdPizza);


// setInterval
// setInterval(function (){
//   const now = new Date();
//   console.log(now);
// }, 3000);

// Creating a clock:
const hour = setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  console.log(`${hour}:${minute}:${second}`);

}, 1000);

 */








































































