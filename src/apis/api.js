const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (query) => {
  const response = await fetch(`${API_URL}/search.php?s=${query}`);
  const data = await response.json();
  return data.meals || [];
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories.php`);
  const data = await response.json();
  return data.categories || [];
};

export const fetchRecipeDetails = async (id) => {
  const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};
