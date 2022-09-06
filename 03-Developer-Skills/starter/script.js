// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log('Landon');

const calcAge = birthYear => 2037 - birthYear;








const TestDataOne = [17, 21, 23];
const TestDataTwo = [12, 5, -5, 0, 4];

const printForcast = function(arr){
    let str = '';
    for(let i=0; i< arr.length; i++){
        str += `${arr[i]}C in ${i + 1} days ...`;
        // Can also use
        // str = str + `${arr[i]}C in ${i + 1} days ...`;
    }

    console.log('...' + str)
}

printForcast(TestDataTwo);


