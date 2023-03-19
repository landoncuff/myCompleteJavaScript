import {API_URL} from './config.js';
import { async } from 'regenerator-runtime';
import {getJSON} from "./helpers.js";

export const state = {
  recipe: {},
}

export const loadRecipe = async function(id){
  try{
    // Fetching data
    const data = await getJSON(`${API_URL}${id}`);

    let {recipe} = data.data; // Using destructuring because both value and variable are same name
    // changing our state object
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
  }catch (e){
    console.log(e);
  }
}