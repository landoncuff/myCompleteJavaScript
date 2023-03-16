export const state = {
  recipe: {},
}

export const loadRecipe = async function(id){
  try{
    // Fetching data from our first API -- returns a Promise
    const res = await fetch(
      // 5ed6604591c37cdc054bc886 are ID's for each food
      // 5ed6604591c37cdc054bcc40
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // Converting our fetch into JSON
    const data = await res.json();

    // Throw error if status failed -- Will send message to catch block
    if(!res.ok) throw new Error(`${data.message} (${data.status})`);

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
    alert(e);
  }
}