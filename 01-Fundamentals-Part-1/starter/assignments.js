//todo: 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) 2. Log their values to the console

let country = 'Untied States of Americana';
let continent = 'North America';
let population = 100000000;

// console.log(country);
// console.log(continent);
// console.log(population);


//Todo: Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable'language', but don't assign it any value yet 2. Log the types of 'isIsland', 'population', 'country' and 'language'to the console

let isIsland = true;

let language;

console.log(typeof language);
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);


// Todo: . Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 3. Try to change one of the changed variables now, and observe what happens

language = 'English';



// Todo: 1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population) 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

if(population > 33000000){
    console.log(`${country}'s is above average: ${population}`);
}else{
    console.log(`${country}'s population is 22 million below average: ${population}`);
}



// Todo: 1. Predicttheresultofthese5operationswithoutexecutingthem: 2. Executetheoperationstocheckifyouwereright
/*
     '9' - '5';
     '19' - '13' + '17';
     '19' - '13' + 17;
     '123' < 57;
     5 + 6 + '4' + 9 - 4 - 2;

*/

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
