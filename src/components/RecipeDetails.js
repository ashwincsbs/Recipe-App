import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../apis/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (id) {
      setLoading(true); // Start loading
      fetchRecipeDetails(id)
        .then((data) => setRecipe(data))
        .finally(() => setLoading(false)); // Stop loading
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading-spinner-container">
          <div className="spinner"></div>
          <p>Loading recipe details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!recipe) {
    return (
      <>
        <Header />
        <div className="recipe-details">
          <p>Recipe not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="recipe-details app-container">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Area:</strong> {recipe.strArea}</p>
        <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {[...Array(20)].map((_, i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            return ingredient ? (
              <li key={i}>{`${ingredient} - ${measure}`}</li>
            ) : null;
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetails;
