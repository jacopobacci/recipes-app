// const deleteAllBtn = document.getElementById('delete-all');
// const deleteAllBtn = document.getElementById('delete-all');

// // const createRecipe = async (title, content, ingredients, rating) => {
// //   try {
// //     const res = await axios.post('/my-recipes', { title, content, ingredients, rating });
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// // const getTasks = async () => {
// //   try {
// //     const res = await axios.get('/my-recipes');
// //     console.log(res.data);
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// // addRecipeBtn.addEventListener('click', () => {
// //   let title = document.getElementById('title').value;
// //   let content = document.getElementById('content').value;
// //   let ingredients = document.getElementById('ingredients').value;
// //   let rating = document.getElementById('rating').value;
// //   createRecipe(title, content, ingredients, rating);
// //   getTasks();
// // });

// const deleteAll = async () => {
//   try {
//     await axios.delete('/delete-all');
//   } catch (err) {
//     console.error(err);
//   }
// };

// // const updateRecipe = async () => {
// //   try {
// //     await axios.patch('/update');
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// deleteAllBtn.addEventListener('click', () => {
//   deleteAll();
// });

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchSection = document.getElementById('search-section');

const fetchApi = async (searchInput) => {
  try {
    const res = await axios.get(`http://localhost:3000/themealdb/${searchInput}`);
    const { meals } = res.data;
    generateRecipes(meals);
  } catch (err) {
    console.log(err);
  }
};

const generateRecipes = (meals) => {
  meals.forEach((meal) => {
    let mealCard = `
        <div class="card" style="width: 18rem" id=${meal.idMeal}>
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions}</p>
        </div>
      </div>
        `;

    searchSection.insertAdjacentHTML('beforeend', mealCard);
  });
};

searchBtn.addEventListener('click', () => {
  fetchApi(searchInput.value);
});
