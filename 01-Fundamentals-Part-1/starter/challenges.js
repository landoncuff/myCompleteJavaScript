//! Challenge 1

//Todo: Store Mark's and John's mass and height in variables
//todo: Calculate both their BMIs using the formula (you can even implement both versions)
//todo: Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

/* 
* Test data:
 * Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const markHeight = 1.69;

const markWeight = 78;

const johnHeight = 1.95;

const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;

//* markBMI = markWeight / (markHeight * markHeight)

const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);



//! Challenge 2

// Todo: 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

//let markRound = Math.round(markBMI);

let markRound = markBMI.toFixed(2);
let johnRound = johnBMI.toFixed(2);

if(markHigherBMI){
    console.log(`Mark's BMI (${markRound}) is higher than John's (${johnRound})!`);
}else{
    console.log(`John's BMI (${johnRound}) is higher than Mark's (${markRound})!`);
}

