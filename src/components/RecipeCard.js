import React from "react";

const RecipeCard = ({ recipe, onSelect, onFavorite, isFavorite }) => {
  if (!recipe) return null; // Safeguard for undefined recipe

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <button onClick={() => onSelect(recipe.idMeal)}>View Details</button>
      <button onClick={() => onFavorite(recipe)}>
        {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
      </button>
    </div>
  );
};

export default RecipeCard;
