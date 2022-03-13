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



//! Challenge 3

// Todo: Calculatetheaveragescoreforeachteam,usingthetestdatabelow 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy Test data: § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// let dolphinsData = 96 + 108 + 89;
// let koalasData = 88 + 91 + 110;

let dolphinsData = (97 + 112 + 101) / 3;
let koalasData = (109 + 95 + 123) / 3;

const dolphinAverage = dolphinsData.toFixed(2);
const koalasAverage = koalasData.toFixed(2);


if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
    console.log(`Dolphins have the higher average score with ${dolphinAverage}`);
}else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
    console.log(`Koalas have the higher average score with ${koalasAverage}`);
}else if(koalasAverage === dolphinAverage && koalasAverage >= 100 && dolphinAverage >= 100){
    console.log(`Draw between Dolphins: ${dolphinAverage} and Koalas: ${koalasAverage}`);
}else{
    console.log(`Nobody wins`);
}

// console.log(dolphinAverage);
// console.log(koalasAverage);



//! Challenge 4

// Todo: Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. Your tasks: 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” Test data: § Data 1: Test for bill values 275, 40 and 430 Hints: § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉 GOOD LUCK 😀

let bill = 40;

let tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

let totalBill = tip + bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);


