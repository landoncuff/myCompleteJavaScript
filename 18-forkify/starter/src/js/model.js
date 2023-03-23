import {API_URL} from './config.js';
import {getJSON} from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
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
    // Throwing error so we get the actual error in controller
    throw e;
  }
}

// Search Functionality
export const loadSearchResults = async function(query){ // Called by the controller
  try{
    // Store query in state
    state.search.query = query;

    // Calling our helper function
    const data = await getJSON(`${API_URL}?search=${query}`);

    // Storing data back from API call in state
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      }
    });
  }catch (e) {
    // Throwing error so we get the actual error in controller
    throw e;
  }
}
