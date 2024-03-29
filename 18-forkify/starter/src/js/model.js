import {API_URL, KEY, RES_PER_PAGE} from './config.js';
import {AJAX} from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmark: [],
}

const createRecipeObject = function(data){
  let {recipe} = data.data; // Using destructuring because both value and variable are same name
  // changing our state object
  return  {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceURL: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // && will short circuit
    ...(recipe.key && {key: recipe.key})
  }
}

export const loadRecipe = async function(id){
  try{
    // Fetching data
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);

    // checking to see if new API call is marked as a bookmark
    if(state.bookmark.some(bookmark => bookmark.id === id)){
      state.recipe.bookmarked = true;
    }else{
      state.recipe.bookmarked = false;
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
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    // Storing data back from API call in state
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && {key: rec.key})
      }
    });
    state.search.page = 1;
  }catch (e) {
    // Throwing error so we get the actual error in controller
    throw e;
  }
}

// Only returning 10 items from the array at a time
export const getSearchResultsPage = function (page = state.search.page){
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;

  return state.search.results.slice(start, end);
}

export const updateServings = function (newServings){
  // newQt = oldQt * newServing / oldServings
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
}

// Storing bookmarks
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
}

export const addBookmark = function (recipe){
  // Add bookmark
  state.bookmark.push(recipe);

  // Mark current recipe as bookmark
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
}

export const deleteBookmark = function (id){
  // Delete Bookmark
  const index = state.bookmark.findIndex(el => el.id === id);
  state.bookmark.splice(index, 1);

  // Mark current recipe as NOT bookmark
  if(id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
}

const init = function (){
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmark = JSON.parse(storage);
}
init();

const clearBookmarks = function (){
  localStorage.clear();
}
// clearBookmarks();

export const uploadRecipe = async function(newRecipe){
  try{
    // Take raw data and format it
    const ingredients = Object.entries(newRecipe) // turning object into array
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if(ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format');
        const [quantity, unit, description] = ingArr;
        return {quantity: quantity ? +quantity : null, unit, description};
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    }

    // Calling function from helpers.js
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);

  }catch (e){
    throw e;
  }
}