'use strict';

// Data needed for a later exercise
// const flights =
  // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
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
*/

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

/*
TODO: Enchanced Object Literals
*/

//? Object literals is "Literally" writing an object in your code
//? ES6 has three new ways to make it easier to write object literals
    //? The first way is to call another object inside an object. Placing the values within the current object
    //? The second way to call a method inside an object
    //? You can now compute inside the object itself (Add things together or change the name of key to be able to compute)

//* Compute the weekdays
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//? Copying the resturant object
//* Removing the 'openingHours' object inside the resturant object to use an easier method (First way)
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



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
  //! New ES6 you dont need to write the "function" keyword
  orderDelivery({starterIndex = 1, mainIndex = 0, time = '5:00', address = 'No Address Found'}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
  },
  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1} and ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  //! Old way to add openingHours back to the restaurant object
  // openingHours: openingHours,
  //! New ES6 way to use object literals
  openingHours,
};

// console.log(restaurant);

/*
TODO: Optional Chaining (.?)

? Checking to see if openingHours exists and the hours for monday
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

* Optional Chaining
? Changing the code above with optional Chaining
! Only run the code if Monday exists. Will run the code after the ?. if the value exists
console.log(restaurant.openingHours.mon?.open);
! Only run the code if Opening hours and Monday exists. Will run the code after the ?. if the value exists
console.log(restaurant.openingHours?.mon?.open);

* Looping through the array and writing the console the days they are open
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  ? Have to pass in the day as the key 
  ! Setting the default value after the ?. and ?? (?? is the || or statement but includes 0)
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

* Optional Chaining on Methods 
? Checking to see if the method exists before calling it 
console.log(restaurant.order?.(0,1) ?? 'Method not found'); // ? Displays method becuase it does exist
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method not found'); // ? Displays method not found


* Optional Chaining on Array
? Checking to see if the array is empty 
const user = [
  {name: 'landon', email: 'landon@gmail'}
]
? If the array exists then return the name otherwise return default value
console.log(user[0]?.name ?? 'User Array empty');
*/

/*
TODO: Looping Objects: Object Keys, Values, and Entries  


* Looping through properties names (keys)
const properties = Object.keys(openingHours);
let openStr = `We are open ${properties.length} days: `;
for(const day of properties){
? Adding more to the string
  openStr += `${day}, `;
}

* Looping through values of an object
for(const days of Object.values(openingHours)){
  console.log(days);
}

* Looping through both keys and values
const keyValue = Object.entries(openingHours);
? Using destructuring to get the values from the object (Using object destructuring)
! Getting the key (fri, sat) and then getting the values inside that object using the {} and their property name
for(const [key, {open, close}] of keyValue){
  console.log(`On the ${key} we open at ${open} and ${close}`);
}
*/

/* 
TODO: Coding Challenge #2
*/

/* 
Let's continue with our football betting app!

* 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
* 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
* 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

* BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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

! Step 1:
* Loop over game and print each player name to the console, with the goal number
? Looping through the object and using descturturing of an array to get the index and the value
for(const [goal, name] of game.scored.entries(game.scored)){
  // let goals = goal += 1;
  let objectStr = `Goal ${goal + 1}: ${name}`;
  console.log(objectStr);
}

! Step 2:
* Loop to caluclate the average odd and log it
let sum = 0;
let totalNumber = 0;
for(const [name, value] of Object.entries(game.odds)){
  ? Getting the sum of all the entries
  sum += value;
  ? calculating the number of entries
  totalNumber++;
}
const average = sum / totalNumber;
console.log(average);

! Step 3:
* Print screen according to the odds
for(const [odd, value] of Object.entries(game.odds)){
  ? Checking the game object and using the name of the varibales in the Odds object to determine the name of the coach. If it is not defined, then set to 'Draw'
  const team = game[odd] ?? 'Draw';
  const outCome = team == 'Draw' ? 'draw' : 'victory';

  const oddString = `Odd of ${outCome} ${team}: ${value}`;

  console.log(oddString);;
}

! Step 4:
* Create an object called scores
const scorers = {};
for (const player of game.scored) {
  ? Using the name to check if they exisit in the array and if they do we will add one to each score. Else we will have the score equal 1
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
TODO: Sets:

? Is a collection of unique values and can never have any duplicates

const orderSet = new Set([
  'pasta', 
  'pizza', 
  'pizza', 
  'cheese', 
  'pizza', 
  'pasta'
]);
? checking the size of the set (returns 3 because sets dont hold duplicates)
console.log(orderSet.size);
? cehcking to see if a value is inside the set
console.log(orderSet.has('pizza'));
? Adding a new value to the set
orderSet.add('bread');
? Delete value from the set
orderSet.delete('pizza');
? Deleting ALL values from sets
// orderSet.clear();

? You can loop through sets 
* Looping through the set
for(const order of orderSet) console.log(order);

? Main purpose of Sets is to remove duplicates from Arrays
* Real Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
? What different positions do we have at the restaurant?
! Turning a Set back into an array (All iterables are able to use the spread operator)
const positions1 = [...new Set(staff)];
console.log(positions1);
! Another way
const positions = new Set(staff);
const RestaurantStaff = [...positions];
console.log(RestaurantStaff);
*/

/*
TODO: Map Fundamentals:


? Data is stored in key value pairs
? Like objects but the keys in maps can be any data type (String, numbers, arrays, or objects)
? A map is a data structure that we can map values to keys

* Creating a new map and Setting values
? Easiest way to create a map is just to delcare it and not pass anything in
const rest = new Map();
rest.set('name', 'Landons Rest');
console.log(rest.set(1, 'London England'));
? Chaining the sets because set returns the map
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed');

* Getting values from the Map
console.log(rest.get('name'));
console.log(rest.get(true));

* Example of using Maps
const time = 21; // 9 PM
? We can manipulate values within the get call
? the logic will return true or false and so it will read the key true or false
const weOpen = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(weOpen);

* Checking if value exists
rest.has('categories');

* Deleting values from Map
rest.delete('name');

* Using Arrays and Objects as Map Keys
? Array
const arr = [1,2];
rest.set(arr, 'Test');
? Getting value from key array
rest.get(arr);

* Setting the key as a value from the User 
rest.set(document.querySelector('h1'), 'Heading'); //? Will return an object (h1 is my key and 'Heading' is my value)

! You can't do this: not the same array in the Heap
rest.set([2,3], 'testing');
rest.get([2,3]);
*/

/* 
TODO: Map Iteration


* Creating a new Map that holds an Array that holds other arrays. The frist element inside the nested Array is the key and the other is the value
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'You got the correct answer'],
  [false, 'Try again!']
]);


* Convert Object into Map
? used when you have an object and need to create a Map
const hoursMap = new Map(Object.entries(openingHours));

* Map Iteration:
? Printing question to the console
? Sending to the console the question
console.log(question.get('question'));
! Using desctructing to get the key and value from the map
for(const [key, value] of question){
  ? Only print to the console if the value is a number
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

? Getting the value from the user and making sure the value from the user is a number
// const answer = Number(prompt('Your Answer'));
console.log(answer);

? Challenge, log to the console what the result is for the user
! My Code
if(answer === question.get('Correct')){
  console.log(question.get(true));
}else{
  console.log(question.get(false));
}

! Teachers code
? Will return true or false
const userAnswer = question.get('Correct') === answer;
console.log(question.get(userAnswer));


* Converting a Map back into an array
const newQuestion = [...question];
console.log(newQuestion);
*/


/* 
TODO: Challenge #3
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

* 1. Create an array 'events' of the different game events that happened (no duplicates)
* 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
* 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
* 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow Card'],
]);

! Step 1: 
? Getting the values of the Map using the value() method  and putting it into an array
const events = [...new Set(gameEvents.values())];

! Step 2:
? Removing the yellow card from the Map using the delete method
? passing in the key of which value I want to delete
console.log(gameEvents);
gameEvents.delete(64)
console.log(gameEvents);


! Step 3:
? Finding on average how often an event happneed during the game
let min = 0;
let total = 0;
for(const [key, value] of gameEvents) {
  min += key;
  total++;
}
let totalMin = 90 / total;
console.log(`An event happened, on average, every ${totalMin} minutes`);


! Step 4:
? Looping to determine if the event happened in the first half or the second half 
for(const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}



* Teachers Code for Challenge 3:

! Step 3: 
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
? Calculating the average time because the game was actually 92 minutes (BONUS)
? Convurting all the keys into an array
? Getting the last value (Using the pop method)
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

*/

/*
TODO: Working with Strings -- Part 1


const airline = 'TAP Air Portugal';
const plane = 'A320';

? Getting the character of a string at a particular index
console.log(plane[0]); //? Will return 'A'
console.log('B247'[0]); //? works the same as above

? get the length of a string
console.log(plane.length);
console.log('B247'.length); //? works the same as above

? Get the index of a character
console.log(airline.indexOf('r')); //? Index 6
console.log(plane.indexOf('A')); //? Index 0
console.log(airline.lastIndexOf('r')); //? Index 10 because that is the last occurence of the character

? Searching for a whole word (Is case sensitive)
console.log(airline.search('Portugal'));

? using the slice method to get part of the string
! The first parameter is the begin.. so which index to start at (Removes everything until the index)
console.log(airline.slice(4)); //? Removed 'TAP' from the string
! Second parameter is the the end.. everything after the end will be removed
console.log(airline.slice(4,7)); //? Removed 'TAP & Portugal' from the string... Returned 'Air'

* Finding the index of a string we dont know about and slicing it from the string

? Extracting the first word (Starting at index 0 and ending at the index of the first space)
console.log(airline.slice(0, airline.indexOf(' '))); //? Returns 'TAP'
? Extracting the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //? Will return Portugal 



* Example:

? function that recives an airplane seat and logs to the console if it is a middle seat or not

const checkMiddleSeat = function(seat){
  ? B and E are the middle seats
  ! Taking the last letter from the string and checking if a B or E 
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat ');
  }else{
    console.log('You got Lucky!!!');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


? Whenever we call a method on a string JavaScript automatically converts that string into an object
? Basically creates:
const stringLandon = new String('Landon is Cool'); //? typeof === object
console.log(stringLandon);
*/


/*
TODO: Working with Strings -- Part 2

const airline = 'TAP Air Portugal';
const plane = 'A320';

* Changing the case of a string

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

? fix the capitalization in name
const passenger = 'lAnDon'; //? Should look like Landon 
? put everything to lowercase 
const passengerLower = passenger.toLowerCase();
? Take the frist part of the string to change the case and then add the rest of the string
! Taking the frist letter -- making it capital, then adding the rest of the string by slicing it and starting at the second letter
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

* Creating a function that will keep names consistent across

const NameFix = function(name) {
  const lowerName = name.toLowerCase();
  const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
  return correctName;
}

console.log(NameFix('rOBERT'));


* Check users email: (Comparing emails)

const email = 'landoncuff@gmail.com';
const loginEmail = '  lANDonCuff@gmail.com';

? Checking to see if emails are the same
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

? same Code as above
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail ? 'Correct Email' : 'Invalid Email');

* replacing parts of strings
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');


* Two methods that return true or false
? Includes 
? Starts with
console.log(plane.includes('A320'));
console.log(plane.startsWith('A'));

*/

/*
TODO: Working with Strings -- Part 3:


? Most powerful string method (split)
console.log('a+very+nice+Person'.split('+'));

? Using destructuring to put names into variables 
const [firstName, lastName] = 'Landon Cuff'.split(' ');

const arr = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(arr);

* Function to capitalize name

const capitalizeName = function(name){
  ? Creats an array of the names by spliting at the space and making sure it is all lowercase first 
  const names = name.toLowerCase().split(' ');
  const nameUpper = [];

  ? Looping through each word and capitalizing the first character
  for(const word of names){
    // nameUpper.push(word[0].toUpperCase() + word.slice(1));
    ? Teacher Code (Removing the first letter and replacing it with the capital letter)
    nameUpper.push(word.replace(word[0], word[0].toUpperCase()))
  }

  ? Joining the array back together and turning back into a string
  console.log(nameUpper.join(' '));
}

capitalizeName("Robert landon cuff");
capitalizeName("daLLin GOLDEN dRIGgs");


* Padding a string

const message = 'Go to gate 23!';
console.log(message.padStart(25));

? Example (Credit Cards online)
const maskCreditCard = function(number){
  // const str = String(number);
  const str = number + '';
  ? Taking last four characters
  const last = str.slice(-4);

  ? Getting the full length of the string and replacing the numbers with *
  return last.padStart(str.length, '*');

}

console.log(maskCreditCard(4332344553322344453)); //? Returns *************************4400
console.log(maskCreditCard('4332344553322344453'));
console.log(maskCreditCard('223454554'));


* Repeat

const message2 = 'Bad Weather... All Departues Delayed';

? Bigger string that repeats the string above
console.log(message2.repeat(5));
*/


/* 
TODO: Challenge #4


* Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

* The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

? THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

? SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

* HINT 1: Remember which character defines a new line in the textarea 😉
* HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
* HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
* HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


! will create a textarea and button on the HTML page
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

? Creating an event to listen from the DOM
document.querySelector('button').addEventListener('click', function(){
  ? Getting the users input in the textarea
  const text = document.querySelector('textarea').value;
  ? splitting the text from the user by a new line (enter) -- This will create a new array with all the values from the user
  const arrValues = text.split('\n');

  ? Looping the new array by using descturturing by adding the index as "i" and the values as "values"
  for(const [i,value] of arrValues.entries()) {
    ? taking each value -- setting it to lowercase -- trimming off the whitespace -- and splitting each value into a new array
    const stringValue = value.toLowerCase().trim().split('_');

    ? Destructuring to get the first string and the second string
    const [firstString, secondString] = stringValue;

    ? Combining the first and second string -- replacing the first value in the second string and replacing it with a capital letter
    const output = `${firstString}${secondString.replace(secondString[0], secondString[0].toUpperCase())}`;

    ? Sending to the console the new string and adding 20 padding space -- creating a check mark that will repeat the number of times of i
    console.log(`${output.padEnd(20)}${'✅ '.repeat(i + 1)}`);
  }
});

* Teachers code:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/

/* 
TODO: More String Practice

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

? Dividing up the string into four different pieces
console.log(flights.split('+')); //? returns an array split at the plus line

? Creating a small function the get the airport code 
const getCode = str => str.slice(0,3).toUpperCase();

? Looping through the new split array
for(const flight of flights.split('+')) {
  ? splitting the new variable by the ; seperator (using destructuring)
  const [type, from, to, time] = flight.split(';');

  ! replaced the : with h on the time to get 11h25 instead of 11:25
  ! Using "replaceAll" to repalce all instances of _ and adding a space instead
  ! Using ‼️ when the fligth is delayed (Using the startWith method)
  ! Taking the first three methods from the "from" and "to" string and then capitalizing them (Created a function above)
  ! Adding padding start to the whole string 
  const output = `${type.startsWith('_Delayed')?'‼️':''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);

  console.log(output);
}
*/