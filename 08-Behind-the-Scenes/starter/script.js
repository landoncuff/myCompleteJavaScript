'use strict';
/* 
todo: scopeing
? Global scope
? Creating own execution case
function calcAge(birthYear){
    const age = 2037 - birthYear;
    
    function printAge(){
        ? Looks at its own scope first for the variable age. Does not see it so it then looks at the parent scope which it will find it
        const output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
        console.log(firstName);

        todo: creating a block scope 
        if(birthYear >= 1981 && birthYear <= 1996){
            const firstName = 'Robert';
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);


            todo: Function is also blocked scope 
            function add(a,b){
                return a + b;
            }
        }

        ! add(); throws an error because it is only declared in the block scope
        ! console.log(str); throws an error because it is not inside the block scope

    }
    printAge();
    return age;
}

? Will be console logged because it is in the global scope and the function will go back and look at the prevous scope which is global
const firstName = 'Landon';
calcAge(1991);

! console.log(age); throws an error
! printAge(); throws an error because it is not in the global scope
*/

/* 
todo: Hoisting and TDZ


? calling variables before they are declared (hoisting)
! Returns 'undefined'
console.log(me); 
! Returns an error
console.log(job); 
! returns an error 
console.log(year);

var me = 'Landon';
let job = 'programmer';
const year = 1991;

? Function hoisting and TDZ
! Does not throw an error 
console.log(addDeclarations(2,3));  
! Throws an error. We need to declare before we call it
console.log(addExpr(2,3));
! Throws an error. We need to declare before we call it
console.log(addArrow(2,3)); 

function addDeclarations(a,b){
    return a + b;
}

const addExpr = function(a,b){
    return a + b;
}

const addArrow = (a,b) => a + b;
*/

/*
todo: Example



? Will run because the 'numProducts' is == 'undefined' which is also a falsy value when we thought it was 10
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}


var x = 2;
let y = 22;
const z = 12;
*/


/* 
    todo: this keyword 

? Displays the window object which is the this in the global scope
console.log(this);

const calcAge = function (birthYear) {
console.log(2037 - birthYear);
? Would be undefined 
? Has no owner
console.log(this); 
}

calcAge(1991);


const calcAgeArrow = (brithYear) => {
    console.log(2027 - brithYear);
    ? displays the window object because arrow functions dont get their own this keyword
    ? using the this keyword of the parent scope (global) which is window
    console.log(this);
}


//todo: this keyword inside an object

const landon = {
    year: 2000,
    calcAge: function () {
        ? gets the year of the landon object
        console.log(2033 - this.year);
        ? Displays the whole landon object
        console.log(this);
    }
}

? instead of written landon.calcAge(1991) we can write 
landon.calcAge();


const robert = {
    year: 2017
}

? Method barrowing which we are taking the function from one object and putting it in another
robert.calcAge = landon.calcAge;
? Always points to the object that is calling the method (robert is calling)
robert.calcAge();


const f = landon.calcAge;

! throws error because year does not exits in f 
f();

*/

/*
todo: Regular functions vs. Arrow functions 


! will add firstName to the window object (DONT USE VAR)
// var firstName = 'Landon';
! Not a code block so it doesnt have its own scope so it is all still inside the global scope
const landon = {
    firstName: 'Robert',
    year: 2000,
    calcAge: function () {
        console.log(2033 - this.year);
        console.log(this);
    },
    ? Doesnt work because Arrow functions dont have their own 'their' keyword
    ? Logs 'Hey undefined' becasue their is no 'firstName' in the window object
    ? Because it doesnt have its own, it will take the 'this' keyword from the parent scope which is the global scope which is the window object(has not firstName object)
    greet: () => console.log(`Hey ${this.firstName}`)
}

landon.greet();


todo: function inside a method

? Solution 1
const kassidy = {
    firstName: 'Robert',
    year: 1996,
    calcAge: function () {
        console.log(2033 - this.year);
        console.log(this);
        ? Function to return is they are a millenial 
        ! doesnt work because it is like if this function is called outside of the method
        ? Working around issue (Can be called self or that)
        const self = this;
        const isMillenial = function () {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial();
    }
}

kassidy.calcAge();


? Solution 2
const rob = {
    firstName: 'Robert',
    year: 1996,
    calcAge: function () {
        console.log(2033 - this.year);
        console.log(this);
        ? Works without having to set a variable becuase arrow doesnt have its own this keyword and will use the this keyword from its parent
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    }
}

rob.calcAge();

todo: Arguments keyword
const addExpr = function (a, b) {
    ? Displays all the parameters
    console.log(arguments);
    return a + b;
}
addExpr(2,5);

var addArrow = (a, b) => {
    console.log(arguments);
   return a + b;
}
addArrow(2,5)
*/
