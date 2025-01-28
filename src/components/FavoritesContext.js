// src/context/FavoritesContext.js
import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.idMeal === recipe.idMeal)) {
        return prevFavorites.filter((fav) => fav.idMeal !== recipe.idMeal); // Remove from favorites
      }
      return [...prevFavorites, recipe]; // Add to favorites
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
