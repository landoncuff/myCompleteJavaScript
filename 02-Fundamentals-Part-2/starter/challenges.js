//! Challenge 1: 

// TODO: Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

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
