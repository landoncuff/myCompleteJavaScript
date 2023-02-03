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