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
*/
//? Displays the window object which is the this in the global scope
console.log(this);

const calcAge = function (birthYear) {
console.log(2037 - birthYear);
//? Would be undefined 
//? Has no owner
console.log(this); 
}

calcAge(1991);


const calcAgeArrow = (brithYear) => {
    console.log(2027 - brithYear);
    //? displays the window object because arrow functions dont get their own this keyword
    //? using the this keyword of the parent scope (global) which is window
    console.log(this);
}


//todo: this keyword inside an object

const landon = {
    year: 2000,
    calcAge: function () {
        //? gets the year of the landon object
        console.log(2033 - this.year);
        //? Displays the whole landon object
        console.log(this);
    }
}

//? instead of written landon.calcAge(1991) we can write 
landon.calcAge();


const robert = {
    year: 2017
}

//? Method barrowing which we are taking the function from one object and putting it in another
robert.calcAge = landon.calcAge;
//? Always points to the object that is calling the method (robert is calling)
robert.calcAge();


const f = landon.calcAge;

//! throws error because year does not exits in f 
f();

