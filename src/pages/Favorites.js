import React from "react";
import RecipeCard from "../components/RecipeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFavorites } from "../components/FavoritesContext";
import { useNavigate } from "react-router-dom";
import "../Styles/recipecard.css";

const Favorites = () => {
  const { favorites, handleFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <h2>Your Favorite Recipes</h2>
        {favorites.length === 0 ? (
          <p>You have no favorite recipes yet.</p>
        ) : (
          <div className="recipe-grid">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                onSelect={handleViewDetails} // Navigate to details page
                onFavorite={handleFavorite} // Toggle favorite directly
                isFavorite={true}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
