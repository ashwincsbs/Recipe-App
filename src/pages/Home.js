import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../apis/api";
import RecipeCard from "../components/RecipeCard";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Import Footer here
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../components/FavoritesContext";
import "../App.css";
import "../Styles/search.css";
import "../Styles/recipecard.css";
import "../Styles/recipedetail.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites, handleFavorite } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes("chicken").then((data) => setRecipes(data.slice(0, 10)));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchRecipes(searchQuery).then((data) => setRecipes(data.slice(0, 10)));
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <>
      <Header goToFavorites={goToFavorites} />
      <div className="app-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for recipes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        <h2>Recipes</h2>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onSelect={handleViewDetails}
              onFavorite={handleFavorite}
              isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
            />
          ))}
        </div>
      </div>
      <Footer /> {/* Footer is placed outside recipe-grid */}
    </>
  );
};

export default Home;
