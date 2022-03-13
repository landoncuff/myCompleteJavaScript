
/* Values and variables

let js = 'amazing';
if(js === 'amazing') alert('JavaScript is Fun');

console.log(40 + 8 + 23 - 10);


! value is a pice of information 
* storing variables (Like a box)
let firstName = 'Landon';

console.log(firstName);

!Variable naming convention
//* camelCase firstName
//* can not write let 3years = 3

*/

/* Data types leature 

! Data types:
//* Primtive Data types:
 number let age = 23
string let name = 'Landon'
 boolean let fullAge = true;
undefined let children;
null let children = null;
 symbol
 bigInteger another type for numbers
//* the value has the type not variable

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'landon');

dynamic typing
changing the value inside the variable
javascriptIsFun = 'YES!';

 undefined (empty value)
let year;
*/


/* 
! operators 

const now = 2022;

const ageLandon = now - 1996;
const ageKass = now - 1999;

console.log(ageLandon, ageKass);

? 2 ** 3 means 2 to the power of 3 
console.log(ageLandon * 2, ageKass / 2, 2 ** 3);

const myFirstName = 'Landon';
const lastName = 'Cuff';

console.log(myFirstName + ' ' + lastName);

? the plus operator will be ran first before being set into the variable x
let x = 10 + 5; //15

x += 10; // x = x + 10 (15 + 10) == 25
x *= 4;
x++; // adding 1
x--; // subtracting 1

//* comparison operators:
 ? >,<,>=, <=
console.log(ageLandon > ageKass); // will return true of false

const fullAge = ageLandon >= 20;
*/

/* 
! Operator Precedence 

const ageLandon = now - 1996;
const ageKass = now - 1999;

console.log(now - 1999 > now - 2018);
 ? Math operators are executed before comparison operators

 ? Look at mdn to look at operator precedence and look at the order table

 ? right to left executed
let x, y;
 ? you can do left to right or else x = y which is undefined
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

 ? Parentheses are executed before any other operators
const averageAge = (ageLandon + ageKass) / 2;

*/


/* 

! String and temperal literals
const firstName = 'Landon';
const job = 'programmer';
const birtYear = 1996;
const year = 2022;

const landon = "I'm " + firstName + ', a ' + (year - birtYear) + ' years old ' + job + '!';

console.log(landon);

//* using ES6 temperal literals - can assemble many points into one string
? start with back tickts

const landonNow = `I'm ${firstName}, a ${year - birtYear} years old ${job}!`;

console.log(landonNow);

? we can use backtickets for any regular Strings. You can use backtickets always

//* Multi lines using ES6

? none ES6 method
console.log('String with \n\
multiple \n\
lines');

? using ES6 temperal literals
console.log(`String
multiple
lines`);

*/


/* 
! if/else statements 

const age = 12;
? const isOldEnough = age >= 18;

if(age >= 18){
    console.log('Landon can start drving 🐱')
}else{
    const yearsLeft = 18 - age;
    console.log(`Landon is too young. Waiting another ${yearsLeft} years`);
}

const brithYear = 1996;
let century;

if(brithYear <= 2000){
    century = 20;
}else{
    century = 21;
}

*/


/* 
! Type conversion and coercion 

//* Type conversion is when you change the type manually
//* Type coercion is JavaScript converts for us

//* Type concersion 
const inputYear = '1996';
// convert string to number
const newInputYear = Number(inputYear);
console.log(newInputYear + 18)

? when you try to convert a non numberable value to a number you will get a NaN (Not a Number);
console.log(Number('Landon'));

//* Type Coercion 
console.log('I am ' + 23 + ' years old');

? the plus sign activates type coercion

let n = '1' + 1; // value is 11


n = n - 1; // subtracts the only number 1 

console.log(n) // 10 is the output because the string 1 doesnt change

*/

/* 
!Truty and Falsy 

//*  5 falsy values: 0; ''; undefined; null; NaN
//*  any value that will be come false converting into a boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Landon'));
console.log(Boolean({}));

const money = 1;
//? it is anumber and not a boolean but JavaScript will try and convert it if not
//? 0 doesnt work because it is a falsy value
if(money){
    console.log("Don't spend it all ;)");
}else{
    console.log("You should get a job");

}

//* checking if a variable is defined or not
let hight;
? undefined is a falsy value
if(hight){
    console.log('Height is defined');
}else{
    console.log('Height is not defined');
}

*/



/* 
!Equality operator: == VS. === 

const age = 18;
if(age === 18) console.log('You just become an adult');

? prompting the user for their favorite number
const favorite = Number((prompt("What's your favorite number?")));
if(favorite ===  23){
    console.log(favorite);
}


//* Else if




//* Logical Operator

const hasDriversLicence = true; // A
const hasGoodVision = false; // B

console.log(hadDriversLicence && hasGoodVision);
console.log(hadDriversLicence || hasGoodVision);

const shouldDrive = hasDriversLicence && hasGoodVision;

if(shouldDrive){
    console.log('Landon is able to drive');
}else{
    console.log('Landon cant drive');
}

const isTried = true // C
console.log(hadDriversLicence || hasGoodVision || isTired);

*/

/*
! Switch Statement 

const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan cource structure');
        console.log('Go to coding meetup');
    break;
    case 'tuesday':
        console.log('prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
        console.log('code examples');
    break;
    case 'friday':
        console.log('record videos');
    break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
    break;
    default:
        console.log('Not a valid day');
}


if(day === 'monday'){
    console.log('Plan cource structure');
    console.log('Go to coding meetup');
}else if(day === 'tuesday'){
    console.log('prepare theory videos');
}

*/

/* 

!Statements and Expressions 

//* Expression is a line of code that produces a value
3 + 40
1991

//* you can not put a statement where an expression should be inputed.

*/



/* 
! ternary operator 

const age = 17;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

console.log(`I like to drink ${drink}`);

*/