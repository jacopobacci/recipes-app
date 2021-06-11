// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchSection = document.getElementById('search-section');

// const fetchApi = async (searchInput) => {
//   try {
//     const res = await axios.get(`http://localhost:3000/themealdb/${searchInput}`);
//     const { meals } = res.data;
//     generateRecipes(meals);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const generateRecipes = (meals) => {
//   meals.forEach((meal) => {
//     let mealCard = `
//         <div class="card" style="width: 18rem" id=${meal.idMeal}>
//         <div class="card-body">
//           <h5 class="card-title">${meal.strMeal}</h5>
//           <p class="card-text">${meal.strInstructions}</p>
//         </div>
//       </div>
//         `;

//     searchSection.insertAdjacentHTML('beforeend', mealCard);
//   });
// };

// searchBtn.addEventListener('click', () => {
//   fetchApi(searchInput.value);
// });
