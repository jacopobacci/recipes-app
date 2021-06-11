// BACKEND FILE FOR MY DATABASES QUERIES

const knex = require('./knex');

const createRecipe = (recipe) => knex('recipes').insert(recipe);

const addRecipeToDb = (recipe) => knex('recipes').insert(recipe);

const getAllRecipes = () => knex('recipes').select('*');

const deleteAllRecipes = () => knex('recipes').del('*');

const deleteRecipe = (id) => knex('recipes').where('id', id).del();

const updateRecipe = (id, recipe) => knex('recipes').where('id', id).update(recipe);

const getSingleRecipe = (id) => knex('recipes').select('*').where('id', id);

module.exports = {
  createRecipe,
  addRecipeToDb,
  getAllRecipes,
  deleteAllRecipes,
  deleteRecipe,
  updateRecipe,
  getSingleRecipe,
};
