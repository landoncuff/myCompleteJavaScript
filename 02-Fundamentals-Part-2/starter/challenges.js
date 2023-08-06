// Went through each challenge a second time

//! Challenge 1:

// TODO: Back to the two gymnastics teams, the Dolphins and the Koalas!
//  There is a new gymnastics discipline, which works differently.
//  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
//  A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

//* Your tasks: 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores 2. Usethefunctiontocalculatetheaverageforbothteams 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)" 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2 5. Ignoredrawsthistime Test data: § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 Hints: § To calculate average of 3 values, add them all together and divide by 3 § To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const dolphinAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);

const checkWinner = function (avgDolhins, avgKoalas){
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`)
    }else if (avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    }else{
        console.log('No team wins!')
    }
}

checkWinner(dolphinAverage, koalasAverage);




//! Challenge 2: 

// TODO: Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

//* Your tasks: 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44 Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉


const calcTip = function (bill) {
    if(bill >= 50 && bill <= 300){
        return bill * .15;
    }else{
        return bill * .2;
    }

    // return bill >= 50 and bill <= 300 ? bill * .15 : bill * .2
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1])  + bills[1], calcTip(bills[bills.length - 1])  + bills[bills.length - 1]];
//const totals = [tips[0] + bills[0], tips[1]  + bills[1], tips[tips.length - 1]  + bills[bills.length - 1]];

console.log(tips);
console.log(totals);





//! Challenge: 3

// Todo: Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

//* Your tasks: 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith) 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`);
}else if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`);
}







// ! Challenge 4: 

// ToDO: Let's improve Steven's tip calculator even more, this time using loops!

//* Your tasks: 1. Create an array 'bills' containing all 10 test bill values 2. Create empty arrays for the tips and the totals ('tips' and 'totals') 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations! Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉 Bonus: 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it: 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements) 4.3. Call the function with the 'totals' array GOOD LUCK 😀


const billsTest = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsTest = [];

const totalsTest = [];

const calcTipTest = function (bill) {
    if(bill >= 50 && bill <= 300){
        return bill * .15;
    }else{
        return bill * .2;
    }

    // return bill >= 50 and bill <= 300 ? bill * .15 : bill * .2
}

for(let i = 0; i < billsTest.length; i++){
    const tip = calcTipTest(billsTest[i]);

    // tipsTest.push(calcTipTest(billsTest[i]));
    tipsTest.push(tip);
    // totalsTest.push(billsTest[i] + calcTipTest(billsTest[i]));
    totalsTest.push(tip + billsTest[i]);
}

console.log(tipsTest);
console.log(totalsTest);


const calcAverageTest = function (arr){
    // const arrayLength = arr.length;
    const sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}