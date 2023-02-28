const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

/*
TODO: Loading a Recipe from API

 */

// Creating an async/await function
const showRecipe = async function(){
  try{
    // Fetching data from our first API -- returns a Promise
    const res = await fetch(
      // 5ed6604591c37cdc054bc886 are ID's for each food
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40'
    );
    // Converting our fetch into JSON
    const data = await res.json();

    // Throw error if status failed -- Will send message to catch block
    if(!res.ok) throw new Error(`${data.message} (${data.status})`);

    console.log(res, data);

    let {recipe} = data.data; // Using destructuring because both value and variable are same name
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log(recipe);

  }catch (e){
    alert(e);
  }
}

showRecipe();