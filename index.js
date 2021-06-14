const express = require('express');
const methodOverride = require('method-override');
const fetch = require('node-fetch');

const app = express();
const recipe = require('./controllers/serverRecipe');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

// GET

app.get('/', async (req, res) => {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.query.search}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    const { meals } = json;
    res.render('recipes.ejs', { meals });
  } catch (err) {
    res.render('recipes.ejs');
    console.log(err);
  }
});

app.get('/add-recipe', (req, res) => {
  res.render('addRecipe.ejs');
});

app.get('/my-recipes', async (req, res) => {
  const recipes = await recipe.getAllRecipes();
  res.render('myRecipes.ejs', { recipes });
});

app.get('/my-recipes/:id/update', async (req, res) => {
  const recipeFromDb = await recipe.getSingleRecipe(req.params.id);
  const singleRecipe = recipeFromDb[0];
  res.render('updateRecipe.ejs', { singleRecipe });
});

// POST

app.post('/my-recipes', async (req, res) => {
  await recipe.createRecipe(req.body);
  res.redirect('my-recipes');
});

// UPDATE

app.patch('/my-recipes/:id', async (req, res) => {
  await recipe.updateRecipe(req.params.id, req.body);
  res.redirect('/my-recipes');
});

// DELETE

app.delete('/my-recipes/:id', async (req, res) => {
  await recipe.deleteRecipe(req.params.id);
  res.redirect('/my-recipes');
});

app.delete('/delete-all', async (req, res) => {
  await recipe.deleteAllRecipes();
  res.redirect('/my-recipes');
});

app.listen(3000, () => console.log('Server Up and running'));
