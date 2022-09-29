'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    //? returning an array of food ordered by the customer
    //? This will point to the given scope
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //? Destructuring right away with parameters
  //? Those are all values from the object being passed in
  //? Also setting default values if nothing is passed in
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '5:00', address = 'No Address Found'}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1} and ${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* 
TODO: Array destructuring


const simp = [2,3,4];
const a = simp[0];
const b = simp[1];
const c = simp[2];

? Destructuring
? Not desptroying the array, just pull data out
! Will take from the array in order of index
? Same as code above
const [x,y,z] = simp;

console.log(a,b,c);
console.log(x,y,z);

todo: Taking out values from the restaurant array
const [first, second] = restaurant.categories;
console.log(first, second);

! if you only want the first and third values from the array
? The empty space will skip over the index that is next so in this case it will skip over index 1
const [firstItem, ,thirdItem] = restaurant.categories;
console.log(firstItem, thirdItem);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

? without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;

? Using destructuring to change the values or swap the values
[main, secondary] = [secondary, main];
console.log(main,secondary);

todo: Function to order food
? getting index 2 from the starter menu and getting the first index from the main menu
? Garlic Bread & Pizza will be our return
console.log(restaurant.order(2, 0));

? Creating two variables from the return of a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

todo: Destructuring a nested array (Array within an array)
const nested = [2, 4, [5,6]];
? Getting the first value and the whole nested array ([5,6])
const [value1, ,value2] = nested;
console.log(value1,value2);

? Getting the first value and all the values from the nested array doing a destructing inside a destructuring
? Destructuring an array within an array
const [i, ,[j, k]] = nested;
console.log(i, j, k);

todo: Setting default values when destructuring
const [p, q, r] = [8,9];
!Last value will be undefined
? Default values
? Will set a default so it is not undefined
const [w=1, m=1, n=1] = [8,9];
console.log(w, m, n);
*/

/* 
TODO: Destructuring Objects

? In order to destructure an object we use the {} braces
* Doesnt matter what order you pull the information from the object. You just have to name it correctly 
const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

* naming variables different from the properity names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

* Default values
? Setting menu to an EMPTY variable 
? getting the starterMenu from the object, naming variable "starters" and setting the default to be EMPTY if no value
const {menu = [], starterMenu: starters = []} = restaurant;

* Mutating Variables (changing the value between two different values)
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

? We want a to become 23 and b to become 7
! In order to destructure already created variables you will need to put the desturtcuring call inside parathensis ()
({a, b} = obj);
// console.log(a,b);

* Nested objects 
? Creating two variables for open and close
? getting information inside restaurant => openingHours => fri (nested inside 3 objects)
! Pulling the information from fri inside the opeingHours and then pulling open and close from the fri object
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

* Function that is passed with an object and embitalty destructuring resturant object
? Calling the new method inside the restaurant object and passing in a new object
restaurant.orderDelivery({
  time: '5:30',
  address: 'Random Address',
  mainIndex: 2,
  starterIndex: 2
});
? Calling the defaults in the method
restaurant.orderDelivery({});

*/

/* 
TODO: Spread Operator (...)

* Adding new elements to the array using spread operator
const arr = [7,8,9,10,11];
? Old way to add new elements to the array
const badWay = [1,2, arr[0], arr[1], arr[2], arr[3], arr[4]];
? Will take out all the elements in the array and put them into the new array
const goodWay = [1,2, ...arr];
// console.log(goodWay);
// console.log(badWay);


* Creating a new item in the mainMenu array in the restaurant object
? Building a new array
const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Landon'];
// console.log(newMenu);
// restaurant.mainMenu = newMenu;

//* Creating shallow copies of an array
const mainMenuCopy = [...restaurant.mainMenu];

//* Merging 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//* Spread Operator on a string 
const str = 'Landon';
const letters = [...str, ' ', 's.'];
// console.log(letters);

* Creating a new method that will order just pasta with three ingredients
? Creating a prompt window for the user to input and capturing that input in the ingredients variable 
? Escaping the s on let's 
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
restaurant.orderPasta(...ingredients);

* Objects 
? New restaurant object
? creating a copy of the resturant object
const restaurantCopy = {...restaurant};
const newRestaurant = {foundingYear: '2015',...restaurantCopy, founder: 'Landon Cuff'};
console.log(newRestaurant);
*/

/*
TODO: Rest Pattern & Parameters 


? Rest pattern looks just like the spread operator but does the exact opposite. It will pack elements into an array
! Sread operator because it is on RIGHT side of the =
const arr = [1,2, ...[3,4]];

! Rest pattern because the ... are on the LEFT side of the =
? We are creating two new variables (a & b) and setting them equal to the frist two indexes of the array. We are then setting the rest of the elements in the array to a variable called 'others'
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

* Another Rest Pattern example in array destructuring 
? Using spread operator to get all of the elements in the mainMenu and startMenu array. We are then capturing the values of pizza and risotto by skipping the middle menu item
? We are then using the rest pattern to input the rest of the menu and starter menu items into a new variable called otherFood
! Will only caputer values after the last variable. In example below otherFood will not have Pasta because it was before risotto (NOT included skipped elements)
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

* Another Rest Pattern example in Objects destructuring
? Only gettting saturday hours and the rest should go into a different variable called otherWeekdays
const {sat, ...otherWeekdays} = restaurant.openingHours;
console.log(sat, otherWeekdays);

* Rest Pattern for Functions 
? Using Rest Parameters to get an unlimited number of parameters
? We are compressing all the elements into an array
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(5,7,3,2);
add(8,2,5,3,2,1,4);

? Creating an array to pass in using the spread operator to the function add
const x = [23,5,7];
? breaking out the elements in the array and passing them to the function add which then will put them back into an array 
! Same as writing add(23,5,7)
add(...x);

* Creating a new metod called oderPizza and using rest parameters
? Will show the first index and then store the rest of the elements into an array called otherIngredients
restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
*/


/*
TODO: Short circuiting && (and) || (or):


? Three properties of logical operators
! They can use ANY data type and return ANY data type and can do short-circuiting
console.log(3 || 'Landon'); //! Will return 3 because it is true value. Doesnt even read Landon
console.log("" || 'Landon'); //! Will return Landon because '' is a falsy value
console.log(true || 0); //! Will return true because 0 is falsy value
console.log(undefined || null); //! Will return null because underfined is a falsy value and null is also falsy 

* using short circuit using the or operator
? Will return 10 because numGusts does not exist
const guest1 = restaurant.numGusts ? restaurant.numGusts : 10;
? Works because restaurant numGusts doesnt exits so it using the or operator to define it
! Wont work if restaurant numguests exits and is equal to 0 because that is not what we want
const guest2 = restaurant.numGusts || 10;
// console.log(guest2);



* Using short circuit using the and operator
? The AND operator is only true if all the conditions are true and will break at the false value
? Preactical example:
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}
? Using short circuit
? If it doesnt exits then it wont do anything. If it does, will order pizza with pepperoni
! will return a pizza with pepperoni
restaurant.orderPizza && restaurant.orderPizza('pepperoni');
! Wont return anything because orderMyPizza doesnt exist
restaurant.orderMyPizza && restaurant.orderPizza('pepperoni');
*/

/*
TODO: Nullish Coalescing Operator (??)

restaurant.numGusts = 0;
const guests = restaurant.numGusts || 10;
console.log(guests);
? is the same this as || but only looks at nullish values (Null and Undefined) (NOT 0 or '')
const guestCorrect = restaurant.numGusts ?? 10;
console.log(guestCorrect);
*/


/* 
TODO: Logical Assignment Operators


const rest1 ={
  name: 'Landon',
  numGusts: 20,
}

const rest2 ={
  name: 'La Pizza',
  owner: 'Kassidy Cuff',
}

* Set default number of guest for those that dont have that property
? if rest2.numGusts exists then add rest2.numGusts or if it doesnt, it will create and add 10
rest2.numGusts = rest2.numGusts || 10;
console.log(rest2.numGusts);

* The OR logical assignment operator
? Same code as above
rest2.numGusts ||= 10;
? using the same assignment operator but fixing to avoid if the value is 0 by using the nullish operator
rest2.numGusts ??= 10;

* The AND logical assignment operator
? Using short circuiting assignment operator
rest2.owner = rest2.owner && '<ANONYMOUS>';
! Will return undefined because the first condition is not true
rest1.owner = rest1.owner && '<ANONYMOUS>';

? Using logical assignment operator
rest2.owner &&= '<ANONYMOUS>';
! doest not return undefined because it did not exist
rest1.owner &&= '<ANONYMOUS>';
*/

/* 
TODO: Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

* 1. Create one player array for each team (variables 'players1' and 'players2')
* 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
* 3. Create an array 'allPlayers' containing all players of both teams (22 players)
* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
* 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
* 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
* 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ], 
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ], 
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  }, 
};

! Step 1
* const [players1, players2] = game.players;
const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1);
console.log(players2);

! Step 2
? creating one variable to hold the value of the first player from the array and then adding the rest of the players to the fieldPlayers array
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

! Step 3
? Creating a new array to hold all the players from both teams and using the spead operator to break both arrays apart into one
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

! Step 4
? Creating a new array to hold 3 new players. Breaking apart the first array and then adding the 3 new players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

! Step 5
? Destructuring an object and putting them into new variables. Need to spesify the name. Had to call x then create the new variable name (x: draw). Draw is the new variable and x is the key
* const {odds: {team1, x: draw, team2}} = game;
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

! Step 6 
? Creates a function that takes an arbitary number of players (Takes a comma sperated string and puts it into an array)
const printGoals = function(...players){
  * console.log(`${players.length}`);
  let sum = 0;
  for(let i = 0; i < players.length; i++){
    sum++;
  }
  console.log(sum);
}

? Spreading the array to be a comma seperated string
printGoals(...players1);
printGoals(...allPlayers);

! Step 7
? Using logical operators to determine if the the condition is true. Need to use && because we need to the first condition to be true and not false
team1 < team2 && console.log('Team 1 is more likley to wiin');
team1 > team2 && console.log('Team 2 is more likley to wiin');
*/

/*
TODO: Looping Arrays: The for-of loop 


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

? Regular for loop
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

* for-of loop
for(const item of menu) {
  console.log(item);
}
// for(const data of menu) console.log(data);

? Get current index of the for-of loop
! Is a pain for this loop was created to just return all values
for(const item of menu.entries()){
  console.log(`${item[0] +1}: ${item[1]}`);
}

? We can destructure the array now
? i is the index because the array is structured like [0, value] or [1, value]
for(const [i, el] of menu.entries()){
  console.log(`${i +1}: ${el}`);
}
*/