import * as model from './model.js';
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {uploadRecipe} from "./model.js";

if(module.hot){
  module.hot.accept();
}

const controlRecipe = async function(){
  try{
    // Getting recipe id
    const id = window.location.hash.slice(1);
    if(!id) return;

    // 0) update Results & Bookmark View to mark selected result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmark);

    // 3) Creating a loading spinner & Displaying it
    recipeView.renderSpinner();

    // 1) Calling Model to get the data (async fun calling another async fun)
    await model.loadRecipe(id);
    const {recipe} = model.state;

    // 2) Rendering Recipe: calling class method
    recipeView.render(recipe);
    // recipeView.render(model.state.recipe);
  }catch (e){
    // Displaying and Handling error message in View
    recipeView.renderError();
  }
}

const controlSearchResults = async function(){
  try{
    // Rendering Spinner for search
    resultsView.renderSpinner();

    // 1) Getting query from the view
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load Search
    await model.loadSearchResults(query);

    // 3) Render initial data
    // Passes data to the Parent Class which then calls the render in Child Class
    // Getting 10 results at a time
    resultsView.render(model.getSearchResultsPage(1));
    // resultsView.render(model.state.search.results);

    // 4) Displaying initial pagination buttons
    paginationView.render(model.state.search);


  }catch (e) {
    console.log(e);
  }
}

// Handles the control of Pagination Buttons
const controlPagination = function (goToPage){
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function (newServings){
  // Update the recipe servings (in State)
  model.updateServings(newServings);

  // Update the recipe View
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function (){
  // 1) Add/Remove bookmark
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  }else{
    model.deleteBookmark(model.state.recipe.id);
  }

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmark)
}

const controlBookmarks = function (){
  bookmarksView.render(model.state.bookmark);
}

const controlAddRecipe = async function (newRecipe){
  try{
    await model.uploadRecipe(newRecipe);
  }catch (e){
    addRecipeView.renderError(e);
  }
}

const init = function (){
  // Calling the events inside the View
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();
