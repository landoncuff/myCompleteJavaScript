// activate strict mode
// has to be the first statement in the script
// used to avoid bugs and errors in our code
// will create visiable errors else it would fail without us knowing
'use strict';

// strict mode introduces
let hasDriversLicense = false;

const passTest = true;

// logic to pass the test
// boolean so we can just enter the text
// strict mode caught the missing s which helped find the error 
//if(passTest) hasDriverLicense = true;
//if(hasDriversLicense) console.log('I can drive');

// throws an error because interface is a reserved word
// const interface = 'Audio';

/* 
! Functions: 
function logger(){
    console.log('My name is Landon');
}

? calling / running/ or invoking function
logger();
logger();
logger();

? function can recieve data and return data back
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}

? this code is replaced by the return of the function (using the value)
const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice);
console.log(appleOrangeJuice);

* there are builtin functions like Number which turns a string into a number
const num = Number('23');
*/





/* 
! Functions part 2 

//* function delcration 
function calcAge1(birthYear){
    // can do it this way or 
    return 2022 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);


//* Function expression: (produce values)
? function without a name (annonms function)

const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

const age2 = calcAge2(1996);
console.log(age2);

*/





/* 
! Arrow Functions: 

//* Function expression:
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

//* arrow function: 

const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(1996);
console.log(age3);

//* arrow function example 
? using more than one line of code
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Landon'));
console.log(yearsUntilRetirement(1999, 'Kass'));

*/





/* 

! Calling functions inside functions 

// function that cuts fruit into smaller pieces
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    ? console.log(applePieces, orangePieces);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;

    return juice;
}

console.log(fruitProcessor(2, 3));

*/

/* 

! Function review: 


const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        // return will exit the function 
        return retirement;
    }else{
        return -1;
    }
?  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Landon'));
console.log(yearsUntilRetirement(1940, 'Bob'));

*/




/* 

! Arrays:

const friend1 = 'Landon';
const friend2 = 'Jake';
const friend3 = 'Kass';
const friend4 = 'Braydon';

const friends = ['Landon', 'Jake', 'Kass', 'Braydon'];
console.log(friends);

? creating a new arra. We need the new syntax or it will be confused
const year = new Array(1991, 2008, 2020, 2022);

? getting the first friend name 
console.log(friends[0], friends[3]);

? getting the length of the array
console.log(friends.length);

? getting the last element of the array
? length is not 0 based so we need to subtract one to get the last elemenet
console.log(friends[friends.length - 1]);

? removing and adding new friends
friends[2] = 'Kassidy';
console.log(friends);

? an array can hold different data types at once
const firstName = 'Landon';
const landon = [firstName, 'Cuff', 2022 - 1996, 'Programmer', friends];
console.log(landon);


//* Array exercise: 
? cant pass in an array as a number
const calcAge = function (birthYear){
    return 2022 - birthYear;
}

const years = [1990, 2020, 1900, 1979];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);
const ages = [age1, age2, age3];

//* Or you can do this
const ages2 = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages2);
*/




/*

! Array Operations (Methods)
! Methods!!!!


const friends = ['Landon', 'Jake', 'Kass', 'Braydon'];

//* Add elements to an array

? push is a builtin function that will add to the end of an array
? the push funciton will return the length of the new array
friends.push('Robert');
const newLength = friends.push('Robert');
console.log(newLength);


? Adding elements to the beginning of an array
? also returns the legnth of the new array
friends.unshift('Sonya');


//* Remove from the array:

? will remove the last element of the array
friends.pop();
const popped = friends.pop();
console.log(popped);

? Remove from the first element of the array
friends.shift();

? will return the index of an element in the array
? will return -1 if the item does not exist in the array
console.log(friends.indexOf('Lebron'));
console.log(friends.indexOf('Kass'));

? will return the true if the element is in the array and false if not
console.log(friends.includes('Landon'));
*/



/* 

! Objects:



//* Array Example:
const landonArray = [
    'Landon',
    'Cuff',
    2022 - 1996,
    'Programmer', 
    ['Robert', 'Kass', 'Braydon']
]

//* Objects:
? objects use key value pairs

const landon = {
    'firstName': 'Landon',
    'lastName': 'Cuff', 
    'age': 2022 - 1996,
    'job': 'Programmer', 
    'friends': ['Robert', 'Kass', 'Braydon']
}

console.log(landon);

*/


/* 

! Dot Vs. Bracket notation for Objects:


const landon = {
    'firstName': 'Landon',
    'lastName': 'Cuff', 
    'age': 2022 - 1996,
    'job': 'Programmer', 
    'friends': ['Robert', 'Kass', 'Braydon']
}

//* Dot notation: 

console.log(landon.lastName);

//* Bracket Notation:

console.log(landon['lastName']);

? store the first name in a variable
const nameKey = 'Name';
console.log(landon['first' + nameKey]);
console.log(landon['last' + nameKey]);

? getting information from the userInterface
const interestedIn = prompt('What do you want to know about Landon? Choose between firstName, lastName, age, job, friends');

? the dot notation will not work because we dont have a key of interestedIn but bracket can break it out
console.log(landon[interestedIn]);

? will return true if the value exists in the object
if(landon[interestedIn]){
    console.log(landon[interestedIn]);
}else{
    console.log('Cant not find that value');
}

//* Adding new properties to the object with dot and bracket
landon.location = 'United States';
landon['Insta'] = 'Landon_Cuff';
console.log(landon);



//* Another challenge for an object:
? landon has 3 friends, and his best friend is called Robert

console.log(`${landon.firstName} has ${landon.friends.length} friends, and his best friend is called ${landon.friends[0]}`)

*/




/* 

! Object Methods:



const landon = {
    firstName: 'Landon',
    lastName: 'Cuff',
    birthYear: 1996,
    job: 'Programmer',
    friends: ['Robert', 'Kass', 'Braydon'],
    hasDriversLicense: true,
    calcAge: function(){
        ? creating a new variable inside the object
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    ? this is the challenge
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old programmer, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}

// console.log(landon.calcAge());
// console.log(landon['calcAge'](1996));

? Already have the birthYear in the object
// console.log(landon.calcAge(landon.birthYear));

? calling the age from the object:
? have to call the function first
console.log(landon.calcAge())
console.log(landon.age);

//* Challenge:
//* Landon is a 46 years old programmer, and he has *a or no * driver's license

console.log(landon.getSummary());
// another test

*/


/* 

! For Loop:


// console.log('Lifting weights rep 1');
// console.log('Lifting weights rep 2');
// console.log('Lifting weights rep 3');
// console.log('Lifting weights rep 4');
// console.log('Lifting weights rep 5');
// console.log('Lifting weights rep 6');
// console.log('Lifting weights rep 7');
// console.log('Lifting weights rep 8');
// console.log('Lifting weights rep 9');
// console.log('Lifting weights rep 10');
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights rep ${rep}`);
}

*/



/* 

! Loop through an array


const landonArray = [
    'Landon', 
    'Cuff',
    2022 - 1996, 
    'Programmer', 
    ['Robert', 'Kass', 'Landon']
]

? Creating a new empty array
const types = [];

? reading values from an array
? adding values to the new empty array
for(let i = 0; i < landonArray.length; i++) {
    console.log(landonArray[i], typeof landonArray[i]);

    ? filling the types array with the types of landonArray
    ? types[i] = typeof landonArray[i];
    ? basically doing this types[0] = 'string';

    ? values to the array
    types.push(typeof landonArray[i]);
}

console.log(types);

const years = [1992, 2022, 2000, 1890];

const ages = [];

for(let i = 0; i < years.length; i++) {
   ages.push(2022 - years[i]);
}

console.log(ages);


//* continue and break statements:
? continue is to exit and then move on to the next one
for(let i = 0; i < landonArray.length; i++) {
    ? will move skip the current interation and move onto the next
    if(typeof landonArray[i] !== 'string') continue;
    console.log(landonArray[i], typeof landonArray[i]);
}

? Break condition
for(let i = 0; i < landonArray.length; i++) {
    ? will move skip the current interation and move onto the next
    if(typeof landonArray[i] === 'number') break;
    console.log(landonArray[i], typeof landonArray[i]);
}

*/





/* 

! Looping backwards and loops in loops


const landonArray = [
    'Landon', 
    'Cuff',
    2022 - 1996, 
    'Programmer', 
    ['Robert', 'Kass', 'Landon']
]

// 0, 1, ...., 4
// 4, 3, ...., 0

? Looping backwards through the array 
? using - 1 to make sure it is 0 base
for(let i = landonArray.length - 1; i >= 0; i--) {
    console.log(i, landonArray[i]);
}

//* Loop inside a loop:

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/





/* 

! While Loop:


for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights rep ${rep}`);
}

? same code but with while loop:
let rep = 1;
while (rep <= 10){
    console.log(`WHILE: Lifting weights rep ${rep}`);

    rep++;
}


? using a while loop that does not depend on a counter
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('Dice is about to end');
    }
}
*/




