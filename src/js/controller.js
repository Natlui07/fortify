import * as model from './model.js';
import recipeView from './views/RecipeView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 1) Cargar receta
    await model.loadRecipe(id);

    // 2) Renderizar receta
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Cargar resultados de búsqueda
    await model.loadSearchResults('pizza');

    // 2) Renderizar resultados
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();




controlSearchResults();






init();