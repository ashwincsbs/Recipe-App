import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./components/RecipeDetails";
import { FavoritesProvider } from "./components/FavoritesContext";
import "./App.css";

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
