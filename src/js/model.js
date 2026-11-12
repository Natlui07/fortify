import { API_URL } from './config.js';
import { getJSON } from './helpers.js';


export const state = {
  recipe: {},
};


export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(`${API_URL}${id}`);
    // ... resto de tu código en model.js sin cambios ...
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

  console.log(state.recipe);
  } catch (err) {
    // Mensaje de error personalizado en consola (Inciso ix)
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};