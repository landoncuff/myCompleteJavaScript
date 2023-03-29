import * as model from './model.js';
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView.js";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if(module.hot){
  module.hot.accept();
}

const controlRecipe = async function(){
  try{
    // Getting recipe id
    const id = window.location.hash.slice(1);
    if(!id) return;

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

const init = function (){
  // Calling the events inside the View
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init();
