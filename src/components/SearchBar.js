import React from 'react';

const SearchBar = ({ searchQuery, onSearch, onQueryChange }) => (
  <div className="search-bar">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search for recipes..."
      className="search-input"
    />
    <button onClick={onSearch} className="search-button">
      Search
    </button>
  </div>
);

export default SearchBar;
