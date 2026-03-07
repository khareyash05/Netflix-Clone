import React, { useState } from "react";

const GENRES = ["All", "Series", "Film", "Cartoon", "Sitcom"];

/**
 * SearchBar - Filters content by search query and genre.
 * Used to search across trending shows, continue watching, and latest releases.
 * Supports genre filtering via a dropdown (default: "All").
 */
function SearchBar({ onSearch, onGenreChange, placeholder = "Search shows and movies..." }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setGenre(value);
    onGenreChange?.(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-bar-input"
        aria-label="Search content"
      />
      <select
        value={genre}
        onChange={handleGenreChange}
        className="genre-select"
        aria-label="Filter by genre"
      >
        {GENRES.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
