
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
