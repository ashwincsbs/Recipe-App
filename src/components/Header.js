import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <header className="header">
      <h1 onClick={goHome} className="app-title">
         HomeMade Recipe App
      </h1>
      <div className="nav-buttons">
        <button onClick={goHome} className="home-button">
          Home
        </button>
        <button onClick={goToFavorites} className="favorites-button">
          View Favorites
        </button>
      </div>
    </header>
  );
};

export default Header;
