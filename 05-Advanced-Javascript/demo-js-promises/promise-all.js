const recipesContainer = document.querySelector('.recipes-container');

const getRandomRecipes = async () => {
  try {
    // Promise.all takes an array of promise objects
    // axios.get returns a promise object
    const randomRecipesResponse = await Promise.all([
      axios.get('http://www.themealdb.com/api/json/v1/1/random.php'),
      axios.get('http://www.themealdb.com/api/json/v1/1/random.php'),
      axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
    ]);

    // Response is an array of axios response objects
    console.log(randomRecipesResponse);

    randomRecipesResponse.forEach((res) => {
      const recipe = res.data.meals[0];
      const recipeH3 = document.createElement('h3');
      recipeH3.innerText = recipe.strMeal;
      recipesContainer.appendChild(recipeH3);
    })
  } catch(err) {
    console.log("Couldn't fetch all recipes");
  }
}

getRandomRecipes();