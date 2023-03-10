// Importing our images so parcel can read our images
// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg'; // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';


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
TODO: Listening for load and hashchange events
 */

// Creating an async/await function
// 1) Loading Recipe
const showRecipe = async function(){
  try{
    // Getting recipe id
    const id = window.location.hash.slice(1);
    if(!id) return;

    // Displaying spinner
    renderSpinner(recipeContainer);
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

    // 2) Rendering Recipe:
    const markup = `
        <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">Servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            <!-- Mapping through each ingredient and combinding into one string -->
            ${recipe.ingredients.map(ing => {
              return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ing.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                  </div>
                </li>
              `;
            }).join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceURL}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;

    // Removing markup html that already exists on the webpage
    recipeContainer.innerHTML = '';

    // Inserting string into the HTML (Parent element)
    recipeContainer.insertAdjacentHTML('afterbegin', markup);

  }catch (e){
    alert(e);
  }
}

// 3) Creating a loading spinner
const renderSpinner = function (parentEl){
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  //clearing parent html element
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

// showRecipe();

// 4) Creating an event that will change the hash in the url
// We are fetching the data when the hash changes
// window.addEventListener('hashchange', showRecipe);

// 5) Creating an event that will load recipes on load
// window.addEventListener('load', showRecipe);

// calling both events at once
const events = ['hashchange', 'load'];
events.forEach(ev => window.addEventListener(ev, showRecipe));



