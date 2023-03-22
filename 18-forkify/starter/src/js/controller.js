import * as model from './model.js';
import recipeView from "./views/recipeView.js";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/*
TODO: Refactoring for MVC:
 */


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


const init = function (){
  // Calling the events inside the View
  recipeView.addHandlerRender(controlRecipe);
}
init();
