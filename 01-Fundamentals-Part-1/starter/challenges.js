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