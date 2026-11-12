import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews.js';
import resultsView from './views/ResultView.js';
import paginationView from './views/paginationView.js';

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
    // 1) Obtener consulta de búsqueda
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // 2) Cargar resultados de búsqueda
    await model.loadSearchResults(query);

    // 3) Renderizar los primeros 10 resultados
    resultsView.render(model.getSearchResultsPage());

    // 4) Renderizar botones iniciales de paginación
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Renderizar NUEVOS resultados de la página seleccionada
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Renderizar NUEVOS botones de paginación
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();