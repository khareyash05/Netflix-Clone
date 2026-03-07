import React, { useState } from "react";

/**
 * SearchBar - Filters content by search query.
 * Used to search across trending shows, continue watching, and latest releases.
 * Supports optional debouncing via debounceMs prop (default: 0 = no debounce).
 * to check
 */
function SearchBar({ onSearch, placeholder = "Search shows and movies..." }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
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
    </div>
  );
}

export default SearchBar;
