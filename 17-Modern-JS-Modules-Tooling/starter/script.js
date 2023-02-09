import * as ShoppingCart from './shoppingCart.js';

/*
TODO: Exporting and Importing in ES6 Modules

// Importing values from other module
import {addToChart, totalQunatity, totalPrice as price} from "./shoppingCart.js";
import * as CartShopping from './shoppingCart.js';
import AddProduct from './shoppingCart.js';


console.log('Importing Module')

// calling the function that is defined inside the shoppingChart module
addToChart('Protein Powder', 3);
console.log(price, totalQunatity);

// Using the import all
CartShopping.addToChart('Protein', 3);
console.log(CartShopping.tq);


// Getting values from default
AddProduct('Protein', 5);

 */

/*
TODO: Top-level await (ES2022)

const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data1 = await res1.json();
console.log(data1);

const getLastPost = async function(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Return object of last post title and body
  return {title: data.at(-1).title, text: data.at(-1).body};
  // {title: data.pop().title, text: data.pop().body}; // Works as well
}

const lastPost = getLastPost(); // Returns a Promise

// Is a Promise (not every clean)
lastPost.then(last => console.log(last));
console.log(lastPost);

// Using top-level await instead (cleaner)
const lastPost2 = await getLastPost();
console.log(lastPost2);

 */

/*
TODO: The Module Pattern

// Best Practice is to write an IIFE Function
const ShoppingCart2 = (function (){
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
  }

  const orderStock = function (product, quantity){
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.totalPrice);
console.log(ShoppingCart2.totalQuantity);

 */

/*
TODO: CommonJS Modules

// Is used for Node JS

// Import
const { addToCart } = require('./shoppingCart.js');

// Export:
export.addToCart = function (product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

 */

/*
TODO: Using imported Lodash

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

 */

/*
TODO: Using Parcel

// Will not reload the page
import cloneDeep from 'lodash-es';

 */


























































































